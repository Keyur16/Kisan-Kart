import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Navbar2() {

    const navigate = useNavigate();
    const cartNavigate = useNavigate();


    const handleProfile = () => {
        if (localStorage.getItem('token')) {
            navigate('/profile');
        }
        else {
            navigate('/login');
        }

    }

    const handleCart = () => {
        if (localStorage.getItem('token')) {
            cartNavigate('/cart');
        }
        else {
            cartNavigate('/login');
        }

    }

    let myStyle = {
        // height: "70px"
    }

    return (
        <div style={myStyle}>
            <div className="d-flex justify-content-around align-content-center shadow p-3 mb-5 bg-body rounded">
                <div className="p-2 ">
                    <Link to="/"><button type="button " className="myButton">Home</button></Link>
                </div>
                <div className="p-2">
                    <a href="#aboutus"><button type="button" className="myButton">About Us</button></a>
                </div>
                <div className="p-2">
                    <Link to="/menu"><button type="button" className="myButton">Menu</button></Link>
                </div>
                <div className="p-2">
                    <button onClick={handleCart} type="button" className="myButton">Cart</button>
                </div>
                <div className="p-2">
                    <Link to="/agrotourism"><button type="button" className="myButton">Agro Tourism</button></Link>
                </div>
                <div className="p-2">
                    <button onClick={handleProfile} type="button" className="myButton">Profile</button>
                </div>
            </div>
        </div>
    )
}
