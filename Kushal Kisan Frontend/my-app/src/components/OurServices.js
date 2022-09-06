import React, { useState, useContext, useEffect } from 'react';
import productContext from '../context/products/productContext';
import TopProduct from './TopProduct';
import DealofTheDay from './DealofTheDay';
import { Link, useNavigate } from 'react-router-dom'







export default function OurServices() {

    const context = useContext(productContext);
    const { topProducts, dealproducts, dotdproducts } = context;

    useEffect(() => {

        topProducts();

    }, [])

    const [isHovering, setIsHovering] = useState(false);

    const mouseenter = (e) => {
        setIsHovering(true);
    }

    const mouseleave = (e) => {
        setIsHovering(false);
    }

    return (
        <>
            {/* Our Services and top products */}
            <div className="maindiv">
                {/* Our Services */}
                <div className="ourServices">
                    <h2 className="About2Heading">Our Services</h2>
                    <img className="About2HeadingUnderline" src="Underline12.png" alt="" />

                    <div className="d-flex justify-content-evenly row1">
                        <div className={`card ${isHovering ? "shadow-lg p-3 mb-5 bg-body rounded" : "shadow-sm p-3 mb-5 bg-body rounded"}`} onMouseEnter={mouseenter} onMouseLeave={mouseleave}>
                            <img className="img1" src="https://res.cloudinary.com/dv9dt8wkp/image/upload/v1659870253/ijeyewcmuhbnwb4jkyrs.jpg" alt="" />
                            <Link to="/menu" className="btn btn-primary">Dairy Products</Link>
                        </div>
                        <div className={`card ${isHovering ? "shadow-lg p-3 mb-5 bg-body rounded" : "shadow-sm p-3 mb-5 bg-body rounded"}`} onMouseEnter={mouseenter} onMouseLeave={mouseleave}>
                            <img className="img1" src="https://res.cloudinary.com/dv9dt8wkp/image/upload/v1659873584/cyawi40azhdxqmlxn9xc.jpg" alt="" />
                            <Link to="/agrotourism" className="btn btn-primary">Agro Tourism</Link>
                        </div>
                        <div className={`card ${isHovering ? "shadow-lg p-3 mb-5 bg-body rounded" : "shadow-sm p-3 mb-5 bg-body rounded"}`} onMouseEnter={mouseenter} onMouseLeave={mouseleave}>
                            <img className="img1" src="https://res.cloudinary.com/dv9dt8wkp/image/upload/v1659873817/kev5c43ppvwyiz8ntxtp.jpg" alt="" />
                            <Link to="/menu" className="btn btn-primary">Fruits & Vegetables</Link>
                        </div>
                    </div>

                </div>

                {/* Top Products  */}
                <div className="topProducts">
                    <h2 className="About2Heading">Top Products</h2>
                    <img className="About2HeadingUnderline" src="Underline12.png" alt="" />


                    <div className="row">

                        {dealproducts?.map((topproduct) => {
                            return <TopProduct key={topproduct._id} topproduct={topproduct} />;
                        })
                        }


                    </div>



                </div>
            </div>

            {/* Deal of the Day */}
            <div className="dealOfTheDay">
                <h2 className="About2Heading">Deal of the Day</h2>
                <img className="About2HeadingUnderline" src="Underline12.png" alt="" />

                <div className="row dotd">


                    {dotdproducts.map((dotd) => {
                        return <DealofTheDay key={dotd._id} dotd={dotd} />;
                    })
                    }



                </div>
            </div>

            {/* Contact Us */}
            <div className="contactus">
                <div className="d-flex justify-content-evenly ">
                    <div className="p-2 ">
                        <h2 className="About2Heading">Contact Us</h2>
                        <img className="About2HeadingUnderline" src="Underline12.png" alt="" />

                        <div className="d-flex flex-column mb-3 ab">
                            <div className="p-2 b2">
                                <h4 className='b2'>Call us :</h4>
                                <p>(+91) 900 000 0000</p>
                            </div>
                            <div className="p-2 b2">
                                <h4 className='b2'>E-mail :</h4>
                                <p>support@KushalKisan.com</p>
                            </div>

                            <div className="p-2 b2">
                                <h4 className='b2'>Working Hours :</h4>
                                <p>Mon - Sat (8.00am - 12.00am)</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 ">Map</div>
                </div>
            </div>
        </>
    )
}


