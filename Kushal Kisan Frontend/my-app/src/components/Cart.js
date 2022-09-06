import React, {useContext, useState, useEffect} from 'react'
import productContext from '../context/products/productContext';



const Cart = () => {

    const context = useContext(productContext);
    const {state: {cart},
            dispatch} = context;

    const [total, setTotal] = useState()

    useEffect(() => {

        setTotal(
            cart.reduce((acc,curr) => acc + Number(curr.price)*curr.qty, 0)
        ); 
        
    },[cart]);

  return (
    <div>
      <div className="container">
        <h3>Your Cart</h3>
        <p>({cart.length} Items)</p>
      </div>

      <div className="container">

        {cart.length >0 ? (
            <>
                {
                    cart.map((product) =>(
                        <span className="cartItem" key={product._id}>
                            <img src="" alt="" />

                            <div className="cardItemDetail">
                                <span>{product.name}</span>
                                <span>{product.price}</span>
                            </div>

                            <div className="selectQuantity">
                                <span>Quantity</span>
                                <select onChange={
                                    (e)=> dispatch({
                                        type: "CHANGE_CART_QTY",
                                        payload: {
                                            _id: product._id,
                                            qty: e.target.value,
                                        },
                                    })
                                } value={product.qty} className="form-select" aria-label="Default select example">
                                    {[...Array(product.Stock).keys()].map((x)=>(
                                        <option key={x+1} >{x+1}</option>
                                    ))}                                                                          
                                </select>
                            </div>

                            <span className='removeFromCart' style={{cursor: "pointer"}} onClick={() =>
                            dispatch({
                                type: "REMOVE_FROM_CART",
                                payload: product
                            })}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                </svg>
                            </span>
                        </span>
                    ))
                }
            </>
        ): (
            <span>The Cart is Empty</span>
        )}

      </div>

      <div className="summary">
        <span>Subtotal ({cart.length}) Items</span>
        <span>Total: $ {total}</span>

        <button type="button" className="btn btn-primary" disabled={cart.length === 0}>Proceed to Checkout</button>
      </div>
      

    </div>
  )
}

export default Cart
