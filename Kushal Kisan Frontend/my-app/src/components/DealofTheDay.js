import React, { useState, useContext } from 'react';
import productContext from '../context/products/productContext';

const DealofTheDay = (props) => {


    const context = useContext(productContext);
    const { dotd } = props;

    const [isHovering, setIsHovering] = useState(false);

    const mouseenter = (e) => {
        setIsHovering(true);
    }

    const mouseleave = (e) => {
        setIsHovering(false);
    }


    return (
        <div className="col-md-3 my-3">

            <div className={`card ${isHovering ? "shadow-lg p-3 mb-5 bg-body rounded" : "shadow-sm p-3 mb-5 bg-body rounded"}`} onMouseEnter={mouseenter} onMouseLeave={mouseleave} >
                <img src={`${dotd.images}`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{dotd.name}</h5>

                    <p className="card-text">{dotd.description}</p>

                    <h6 className="card-title">{dotd.price}</h6>

                    <h6 className="card-title">{dotd.category}</h6>

                    <h6 className="card-title">{dotd.stock}</h6>


                    <a href="#" className="btn btn-primary">Add to Cart</a>
                </div>
            </div>

        </div>
    )
}

export default DealofTheDay
