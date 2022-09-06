import React from 'react'
import TopNavbar from "../components/TopNavbar";
import Name from "../components/Name";
import Navbar2 from "../components/Navbar2";
import About1 from "../components/About1";
import About2 from "../components/About2";
import OurServices from "../components/OurServices";
import Footer from "../components/Footer";

const Home = () => {

    let myStyle = {
        padding: '0',
        margin: '0',
        width: '100%',
        // backgroundColor: 'black',
        // color: 'white'

    }


    return (
        <div style={myStyle}>
            <TopNavbar />
            <Name />
            <Navbar2 />
            <About1 />
            <About2 />
            <OurServices />
            <Footer />
        </div>
    )
}

export default Home
