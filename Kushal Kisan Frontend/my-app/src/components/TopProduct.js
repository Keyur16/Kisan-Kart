import React, { useState, useContext } from 'react';
import productContext from '../context/products/productContext';


const TopProduct = (props) => {


    const context = useContext(productContext);
    const { topproduct } = props;

    const [isHovering, setIsHovering] = useState(false);

    const mouseenter = (e) => {
        setIsHovering(true);
    }

    const mouseleave = (e) => {
        setIsHovering(false);
    }


    return (



        <div className="col-md-4 my-3">

            <div className={`card ${isHovering ? "shadow-lg p-3 mb-5 bg-body rounded" : "shadow-sm p-3 mb-5 bg-body rounded"}`} onMouseEnter={mouseenter} onMouseLeave={mouseleave} >
                <img src={`${topproduct.images}`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{topproduct.name}</h5>

                    <p className="card-text">{topproduct.description}</p>

                    <h6 className="card-title">{topproduct.price}</h6>

                    <h6 className="card-title">{topproduct.category}</h6>

                    <h6 className="card-title">{topproduct.stock}</h6>


                    <a href="#" className="btn btn-primary">Add to Cart</a>
                </div>
            </div>
        </div>






    )
}

export default TopProduct
