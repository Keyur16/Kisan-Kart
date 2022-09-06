import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import productContext from '../context/products/productContext';
import ProductState from '../context/products/ProductState';
import Productitem from './Productitem';


export default function Menu() {

    const context = useContext(productContext);
    const { products, getProducts, filterState: {
        byStock, byCategory, searchQuery, sort
    }, filterDispatch } = context;

    //console.log(byStock, sort, searchQuery);

    useEffect(() => {

        getProducts();

    }, [])

    const transformProducts = () => {
        let sortedProducts = products;

        if (sort) {
            sortedProducts = sortedProducts.sort((a, b) =>
                sort === "lowToHigh" ? a.price - b.price : b.price - a.price
            );
        }

        if (!byStock) {
            sortedProducts = sortedProducts.filter((product) => product.Stock);
        }

        if (searchQuery) {
            sortedProducts = sortedProducts.filter((product) =>
                product.name.toLowerCase().includes(searchQuery)
            );
        }

        if (byCategory) {
            sortedProducts = sortedProducts.
                filter((product) => {
                    return product.category === byCategory;
                });
        }

        return sortedProducts;
    }

    const navigate = useNavigate();



    // let imagestyle={
    //     borderRadius: 650,
    //     height: 120,
    //     width: 120,
    //     paddingBottom: 15,

    // }

    return (
        <>
            {/* <div className="d-flex justify-content-between shadow p-3 mb-5 bg-body rounded topbar">
            <div className="p-2 kisanimage">
                <img src="kisanimage.jpg" alt="" style={imagestyle} />
            </div>
            <div className="p-2 d-flex justify-content-around   menuNavbar">
                <div className="p-2 ">
                    <Link to="/"><button type="button " className="myButton"   >Home</button></Link>
                </div>
                <div className="p-2">
                    <Link to="/"><button type="button" className="myButton">About Us</button></Link>
                </div>
                <div className="p-2">
                    <Link to="/menu"><button type="button" className="myButton">Menu</button></Link>
                </div>
                <div className="p-2">
                    <Link to="/"><button type="button" className="myButton">Cart</button></Link>
                </div>
                <div className="p-2">
                    <Link to="/"><button type="button" className="myButton">Quiz</button></Link>
                </div>
                <div className="p-2">
                    <Link to="/"><button type="button" className="myButton">Profile</button></Link>
                </div>
            </div>
        </div> */}
            <div className="d-flex justify-content-between abc">
                <div className="p-2 sidebar">
                    sidebar <br />

                    <button type="button" className="sidebarButton my-2" onClick={() => filterDispatch({
                        type: "SORT_BY_CATEGORY",
                        payload: "Fruits",
                    })}>&nbsp;&nbsp;Fruits</button><br />

                    <button type="button" className="sidebarButton my-2" onClick={() => filterDispatch({
                        type: "SORT_BY_CATEGORY",
                        payload: "Vegetables",
                    })}>&nbsp;&nbsp;Vegetables</button><br />

                    <button type="button" className="sidebarButton my-2" onClick={() => filterDispatch({
                        type: "SORT_BY_CATEGORY",
                        payload: "Dairy Products",
                    })}>&nbsp;&nbsp;Dairy Products</button><br />

                    <button type="button" className="sidebarButton my-2" onClick={() => filterDispatch({
                        type: "SORT_BY_CATEGORY",
                        payload: "Cereals",
                    })}>&nbsp;&nbsp;Cereals</button><br />

                    <button type="button" className="sidebarButton my-2" onClick={() => filterDispatch({
                        type: "CLEAR_ALL_FILTERS",
                    })}>&nbsp;&nbsp;All Products</button><br />
                </div>


                <div className="p-2 row">


                    {transformProducts().map((product) => {
                        return <Productitem key={product._id} product={product} />;
                    })
                    }


                </div>


                <div className="p-2 filters">
                    filters <br />
                    <div>
                        <p>Sort by Price</p>
                        <div className="form-check">
                            <input onChange={() => filterDispatch({
                                type: "SORT_BY_PRICE",
                                payload: "lowToHigh",
                            })} checked={sort === "lowToHigh" ? true : false} className="form-check-input" type="radio" name="Increasing" id="Increasing" />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Increasing
                            </label>
                        </div>

                        <div className="form-check">
                            <input onChange={() => filterDispatch({
                                type: "SORT_BY_PRICE",
                                payload: "highToLow",
                            })} checked={sort === "highToLow" ? true : false} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Decreasing
                            </label>
                        </div>
                    </div>

                    <div>
                        <p>filter by Stock</p>
                        <div className="form-check">
                            <input onChange={() => filterDispatch({
                                type: "FILTER_BY_STOCK",
                            })} checked={byStock} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Include Out of Stock
                            </label>
                        </div>
                    </div>

                    <div>
                        <p>Search the product you want</p>
                        <div><input onChange={(e) => filterDispatch({
                            type: "FILTER_BY_SEARCH",
                            payload: e.target.value,
                        })} className="form-control" type="text" placeholder="Search here !" aria-label="default input example" /></div>
                    </div>

                    <div>
                        <button onClick={() => filterDispatch({
                            type: "CLEAR_ALL_FILTERS",
                        })} type="button" class="btn btn-light">Clear all Filters</button>
                    </div>
                </div>
                {/* checked={sort === "lowToHigh"? "true": "false"} */}
                {/* checked={sort === "highToLow"? "true": "false"} */}
            </div>
        </>
    )
}
