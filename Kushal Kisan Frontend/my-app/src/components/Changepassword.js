import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Changepassword = () => {

    const history = useNavigate();

    const handleChangepassword = async (e) => {

        e.preventDefault();
        const { password, cpassword } = newpassword;


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

        // if (old password is not correct) {
        //     // toast({
        //     //     title: "Passwords Do Not Match",
        //     //     status: "warning",
        //     //     duration: 5000,
        //     //     isClosable: true,
        //     //     position: "bottom",
        //     // });

        //     alert("Incorrect old password");

        // }


        const response = await fetch("http://localhost:5000/api/v1/changepassword", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.

            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },

            body: JSON.stringify({ password }) // body data type must match "Content-Type" header
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



    const [newpassword, setNewpassword] = useState({ password: "", cpassword: "" });

    const onChange = (e) => {
        setNewpassword({ ...newpassword, [e.target.name]: e.target.value })
    }


    return (
        <div>

            <form onSubmit={handleChangepassword}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Old Password</label>
                    <input placeholder='Enter old password' type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">New Password</label>
                    <input placeholder='Enter new password' type="password" class="form-control" onChange={onChange} id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Confirm New Password</label>
                    <input placeholder='Enter new password again' type="password" class="form-control" onChange={onChange} id="exampleInputPassword1" />
                </div>

                <button type="submit" class="btn btn-primary">Change Password</button>
            </form>

        </div>
    )
}

export default Changepassword
