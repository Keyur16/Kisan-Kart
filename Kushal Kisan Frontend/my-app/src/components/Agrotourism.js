import React, { useState, useEffect, useContext } from 'react'
import productContext from '../context/products/productContext';
import Productitem from './Productitem';


const Agrotourism = () => {

    const context = useContext(productContext);
    const { products, getProducts } = context;

    useEffect(() => {

        getProducts();

    }, [])

    return (
        <div>
            <h1>Adding Green to your Life !</h1>

            {products.map((product) => {
                return <Productitem key={product._id} product={product} />;
            })
            }

        </div>
    )
}

export default Agrotourism
