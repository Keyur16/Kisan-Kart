import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import productContext from '../context/products/productContext';

const FarmerProfile = () => {


  //get user info
  const context = useContext(productContext);
  const { userInfo, getUserInfo } = context;



  useEffect(() => {

    getUserInfo();

  }, [])



  return (
    <div className="shadow p-3 mb-5 bg-body rounded profile">

      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <div className="d-flex justify-content-evenly my-3">
            <h5 className="my-3 hello">Hello ! {userInfo.name}</h5>
            <img className="userAvatar" src="userAvatar.png" alt="" />
          </div>
        </li>
        <li className="list-group-item">
          <div className="p-2">
            <h6>Your Orders</h6>
          </div>
        </li>
        <li className="list-group-item">
          <div className="p-2">
            <h6>Buy again</h6>
          </div>
        </li>
        <li className="list-group-item">
          <div className="p-2">
            <h6>Your Wish List</h6>
          </div>
        </li>
        <li className="list-group-item">
          <div className="p-2">
            <h6>Your registered email</h6>
            <p>{userInfo.email}</p>
          </div>

        </li>
        {/* <li className="list-group-item">
          <div className="p-2">
            <Link className="btn btn-primary" to="/changepassword" role="button">change password</Link>
          </div>
        </li>




        <li className="list-group-item">
          <div className="p-2">
            <Link className="btn btn-primary" to="/addproductform" role="button">Add a Product</Link>
          </div>
        </li>
        <li className="list-group-item">
          <div className="p-2">
            <Link className="btn btn-primary" to="/agrotourismform" role="button">Start Agrotourism</Link>
          </div>
        </li> */}


        {userInfo.role === "farmer" ?

          <div>
            <li className="list-group-item">
              <div className="p-2">
                <Link className="btn btn-primary" to="/changepassword" role="button">change password</Link>
              </div>
            </li>
            <li className="list-group-item">
              <div className="p-2">
                <Link className="btn btn-primary" to="/addproductform" role="button">Add a Product</Link>
              </div>
            </li>
            <li className="list-group-item">
              <div className="p-2">
                <Link className="btn btn-primary" to="/agrotourismform" role="button">Start Agrotourism</Link>
              </div>
            </li>
          </div>
          :
          <li className="list-group-item">
            <div className="p-2">
              <Link className="btn btn-primary" to="/changepassword" role="button">change password</Link>
            </div>
          </li>

        }




      </ul>

    </div>
  )
}

export default FarmerProfile
