import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function MiniNavbar() {

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


    let imagestyle = {
        borderRadius: 650,
        height: 120,
        width: 120,
        paddingBottom: 15,

    }

    return (
        <div className='c'>
            <div className="d-flex justify-content-between shadow p-3 mb-5 bg-body rounded topbar">
                <div className="p-2 kisanimage">
                    <img src="kisanimage.jpg" alt="" style={imagestyle} />
                </div>
                <div className="p-2 d-flex justify-content-around   menuNavbar">
                    <div className="p-2 ">
                        <Link to="/"><button type="button " className="myButton"   >Home</button></Link>
                    </div>
                    <div className="p-2">
                        <Link to="/aboutus"><button type="button" className="myButton">About Us</button></Link>
                    </div>
                    <div className="p-2">
                        <Link to="/menu"><button type="button" className="myButton">Menu</button></Link>
                    </div>
                    <div className="p-2">
                        <button onClick={handleCart} type="button" className="myButton">Cart</button>
                    </div>
                    <div className="p-2">
                        <Link to="/agrotourism"><button type="button" className="myButton">Agrotourism</button></Link>
                    </div>
                    <div className="p-2">
                        <button onClick={handleProfile} type="button" className="myButton">Profile</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
