import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const RegisterPage = () => {

    const history = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();
        const { name, email, password, cpassword, role } = credentials

        if (password !== cpassword) {
            // toast({
            //     title: "Passwords Do Not Match",
            //     status: "warning",
            //     duration: 5000,
            //     isClosable: true,
            //     position: "bottom",
            // });

            alert("Passwords do not match");

            return;
        }



        const response = await fetch("http://localhost:5000/api/v1/register", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.

            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },

            body: JSON.stringify({ name, email, password, role }) // body data type must match "Content-Type" header
        });
        const json = await response.json()
        console.log(json);

        if (json.success) {
            //Save the token and redirect
            localStorage.setItem('token', json.token);

            // <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            //     <div class="toast-header">
            //         <img src="..." class="rounded me-2" alt="..." />
            //         <strong class="me-auto">Bootstrap</strong>
            //         <small class="text-muted">11 mins ago</small>
            //         <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            //     </div>
            //     <div class="toast-body">
            //         Registrattion Successful !
            //     </div>
            // </div>

            alert("Registration Successful");

            history('/');
        }
        else {
            alert("invalid credentials");

            // <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            //     <div class="toast-header">
            //         <img src="..." class="rounded me-2" alt="..." />
            //         <strong class="me-auto">Bootstrap</strong>
            //         <small class="text-muted">11 mins ago</small>
            //         <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            //     </div>
            //     <div class="toast-body">
            //         Invalid Credentials.
            //     </div>
            // </div>
        }
    }

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "", role: "user" });

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    let imagestyle = {
        borderRadius: 0,
        height: 70,
        width: 70,
        paddingBottom: 15,
        marginTop: 20,

    }

    return (
        <>
            <div className="d-flex">

                <div className="p-2 flex-grow-1 abc ">
                    <img className="loginimage shadow-lg p-3   " src="LoginPageImage.jpg" alt="" />
                </div>
                <div className="p-2 loginForm lfdiv shadow-lg p-3  ">
                    <div className='tp'>
                        <div className=" kisanimage ">
                            <img className="kisan" src="kisanimage.jpg" alt="" style={imagestyle} />
                        </div>
                        <h2>Kisan-Kart</h2>
                    </div>

                    <hr className='hr' />

                    <form onSubmit={handleSubmit} className="form" action="">
                        <h2 className="welcomeback">Hola! Glad to see you.</h2>

                        <div className="email">
                            <label htmlFor="name" className="form-label">Name</label><br />
                            <input className="in" type="text" name="name" id="name" value={credentials.name} onChange={onChange} required />
                        </div>
                        <div className="email">
                            <label htmlFor="email" className="form-label">Email</label><br />
                            <input className="in" type="email" name="email" id="email" value={credentials.email} onChange={onChange} required />
                        </div>





                        {/* <div className="email">
                    Contact no. <br />
                    <input className="in" type="number" name="contactNumber" id="contactNumber" required />
                </div>
                <div className="email">
                    Address Line 1 <br />
                    <input className="in" type="textarea" name="addressline1" id="addressline1" required />
                </div>
                <div className="email">
                    Address Line 2 <br />
                    <input className="in" type="textarea" name="addressline2" id="addressline2" required />
                </div>

                <div className="email">
                    City <br />
                    <select name="city" id="city">
                        <option value="">--Select a City--</option>
                        <option value="">Ahmedabad</option>
                        <option value="">Bengaluru</option>
                        <option value="">Cuttack</option>
                        <option value="">Dehradun</option>
                        <option value="">Gandhinagar</option>
                        <option value="">Jaipur</option>
                        <option value="">Kolkata</option>
                        <option value="">Nashik</option>
                        <option value="">Pune</option>
                        <option value="">Raipur</option>
                        <option value="">Shillong</option>
                        <option value="">Tejpur</option>
                        <option value="">Varanasi</option>                        
                    </select>
                </div>
                <div className="email">
                    Pincode <br />
                    <input className="in" type="number" name="pincode" id="pincode" required />
                </div> */}


                        <div className="password">
                            <label htmlFor="password" className="form-label">password</label><br />
                            <input className="in" type="password" name="password" id="password" value={credentials.password} onChange={onChange} required />
                        </div>
                        <div className="password">
                            <label htmlFor="cpassword" className="form-label">confirm password</label><br />
                            <input className="in" type="password" name="cpassword" id="cpassword" value={credentials.cpassword} onChange={onChange} required />
                        </div>

                        <div className="email">
                            <p>Are you a farmer  or a consumer ?</p>
                            <div class="form-check email">
                                <input class="form-check-input" type="radio" name="role" id="flexRadioDefault1" value="user" onChange={onChange} />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Consumer
                                </label>
                            </div>
                            <div class="form-check email">
                                <input class="form-check-input" type="radio" name="role" id="flexRadioDefault1" value="farmer" onChange={onChange} />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Farmer
                                </label>
                            </div>
                        </div>

                        <div className="submit">
                            <input className="sub" type="submit" value="SignUp" />
                        </div>

                    </form>

                    <div className='lpregister'>
                        Already have an Account? &nbsp;&nbsp;
                        <Link className="reg" to="/login">Login Here</Link>
                    </div>

                </div>

            </div>
        </>
    )
}

export default RegisterPage
