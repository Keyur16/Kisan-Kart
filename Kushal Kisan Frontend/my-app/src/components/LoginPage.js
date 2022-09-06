import React, { useState, useEffect, useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import productContext from '../context/products/productContext';


export default function LoginPage() {

    const history  = useNavigate();

    const handleSubmit = async (e)=>{

        e.preventDefault();

        //login user
        const response = await fetch("http://localhost:5000/api/v1/login", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            
            headers: {
              'Content-Type': 'application/json'
            },
            
            body: JSON.stringify({email: credentials.email, password: credentials.password}) // body data type must match "Content-Type" header
          });
          const json = await response.json()
          //console.log(json.token);

          if(json.success){
            //Save the authtoken and redirect
            localStorage.setItem('token', json.token);
            console.log(localStorage.getItem('token'))
            history('/');
          }
          else{
            alert("invalid credentials");
          }



          
    }

    const [credentials, setCredentials] = useState({email: "", password: ""});

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value })
    }

    let imagestyle={
        borderRadius: 0,
        height: 70,
        width: 70,
        paddingBottom: 15,
        marginTop: 20,

    }


    //get user info
    // const context = useContext(productContext);
    // const {userInfo, getUserInfo} = context;

    // useEffect(() => {

    //   getUserInfo(); 
        
    // },[])


  return (
    <>
    <div className="d-flex ">
        
            <div className="p-2 flex-grow-1 abc ">
                <img className="loginimage shadow-lg p-3   " src="LoginPageImage.jpg" alt="" />
            </div>
            <div className="p-2 loginForm lfdiv shadow-lg p-3  ">
                <div className='tp'>
                 <div className=" kisanimage ">
                    <img className="kisan" src="kisanimage.jpg" alt="" style={imagestyle} />
                 </div>
                <h2>Kushal Kisan</h2>
                </div>

                <hr className='hr' />

                <form onSubmit={handleSubmit} className="form" action="">
                    <h2 className="welcomeback">Welcome back!</h2>

                    <div className="email">
                        <label htmlFor="email" className="form-label">Email</label><br />
                        <input className="in" type="email" name="email" id="email" value={credentials.email} onChange={onChange} required />
                    </div>
                    <div className="password">
                        <label htmlFor="password" className="form-label">password</label><br />
                        <input className="in" type="password" name="password" id="password" value={credentials.password} onChange={onChange} required />
                    </div>
                    <div className="submit">
                        <input className="sub" type="submit" value="Login" />
                    </div>
                    
                </form>

                <div className='lpregister'>
                    Don't have an Account? &nbsp;&nbsp;
                    <Link className="reg" to="/register">Register Here</Link>
                </div>
            </div>
            
    </div>
    </>
  )
}
