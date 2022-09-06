import React from 'react'
import {Link} from "react-router-dom"; 

export default function About1() {
  return (
    <>
    <a id="aboutus" >
      <div className="AboutBackground">
          <div className=" About1tag">
              Welcome to <h3>Kushal Kisan</h3>
              <h5>Get the Best Services at the Best Price</h5>
              <p className="ptext" >Kushal Kisan is a joint initiative by TRIF & Syngenta Foundation. A #KushalKisan is an agri entrepreneur who supports his/her partner farmers by providing inputs, protocols, crop protection & market linkage</p>
              <div>
                  <Link to='/aboutus'><button type="button" className="myButton">Read More</button></Link>
                  <Link to='/menu'><button type="button" className="myButton">Buy Now</button></Link>
              </div>
          </div>
      </div>
    </a>
    </>
  )
}
