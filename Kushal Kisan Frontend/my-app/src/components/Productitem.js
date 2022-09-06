import React, { useState, useContext } from 'react'
import productContext from '../context/products/productContext';



const Productitem = (props) => {

    const context = useContext(productContext);
    const { state: { cart },
        dispatch } = context;




    const [isHovering, setIsHovering] = useState(false);

    const mouseenter = (e) => {
        setIsHovering(true);
    }

    const mouseleave = (e) => {
        setIsHovering(false)
    }

    const { product } = props;

    return (
        <div className="col-md-6 my-3">

            <div className={`card ${isHovering ? "shadow-lg p-3 mb-5 bg-body rounded" : "shadow-sm p-3 mb-5 bg-body rounded"}`} onMouseEnter={mouseenter} onMouseLeave={mouseleave} >
                <img src={`${product.images}`} className="card-img-top" alt="..." />
                <div className="card-body">

                    <h5 className="card-title">{product.name}</h5>

                    <p className="card-text">{product.description}</p>

                    <h6 className="card-title">$ {product.price}</h6>

                    <h6 className="card-title">{product.category}</h6>

                    <h6 className="card-title">{product.Stock}</h6>


                    {
                        cart.some(p => p._id === product._id) ? (
                            <button onClick={() => {
                                dispatch({
                                    type: 'REMOVE_FROM_CART',
                                    payload: product,
                                })
                            }} className="btn btn-danger">Remove from Cart</button>
                        ) : (
                            <button onClick={() => {
                                dispatch({
                                    type: 'ADD_TO_CART',
                                    payload: product,
                                })
                                //localStorage.setItem("cartItems", JSON.stringify(cart.product));
                            }} disabled={product.Stock === 0} className="btn btn-primary">
                                {product.Stock === 0 ? "Out of Stock" : "Add to Cart"}
                            </button>
                        )
                    }


                </div>
            </div>

        </div>
    )
}

export default Productitem
