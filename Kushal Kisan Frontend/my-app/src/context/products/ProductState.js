import productContext from "./productContext";
import React, { useReducer, useState } from "react";
import { cartReducer } from '../../reducers/cartReducer'
import { filterReducer } from '../../reducers/filterReducer'

const ProductState = (props) => {

  const host = "http://localhost:5000"

  const initialTopProducts = [
    {
      "_id": "62b607a8ef72ad021ab7b92c",
      "name": "lokwan",
      "description": "good quality wheat",
      "price": 200,
      "ratings": 0,
      "category": "Cereals",
      "Stock": 1,
      "numOfReviews": 0,
      "images": [],
      "reviews": [],
      "createdAt": "2022-06-24T18:51:20.623Z",
      "__v": 0
    },
    {
      "_id": "62b60cdbef72ad021ab7b93b",
      "name": "apple",
      "description": "red juicy",
      "price": 100,
      "ratings": 0,
      "category": "fruits",
      "Stock": 1,
      "numOfReviews": 0,
      "images": [],
      "reviews": [],
      "createdAt": "2022-06-24T19:13:31.336Z",
      "__v": 0
    },
    {
      "_id": "62b60cdbef72ad021ab7b93b",
      "name": "banana",
      "description": "fresh",
      "price": 90,
      "ratings": 0,
      "category": "fruits",
      "Stock": 1,
      "numOfReviews": 0,
      "images": [],
      "reviews": [],
      "createdAt": "2022-06-24T19:13:31.336Z",
      "__v": 0
    },
    {
      "_id": "62b60cdbef72ad021ab7b93b",
      "name": "Mango",
      "description": "Alphonso",
      "price": 500,
      "ratings": 0,
      "category": "fruits",
      "Stock": 1,
      "numOfReviews": 0,
      "images": [],
      "reviews": [],
      "createdAt": "2022-06-24T19:13:31.336Z",
      "__v": 0
    },
    {
      "_id": "62b60cdbef72ad021ab7b93b",
      "name": "Guava",
      "description": "green fresh",
      "price": 400,
      "ratings": 0,
      "category": "fruits",
      "Stock": 1,
      "numOfReviews": 0,
      "images": [],
      "reviews": [],
      "createdAt": "2022-06-24T19:13:31.336Z",
      "__v": 0
    },
    {
      "_id": "62b60cdbef72ad021ab7b93b",
      "name": "Lichi",
      "description": "red refreshing",
      "price": 700,
      "ratings": 0,
      "category": "fruits",
      "Stock": 1,
      "numOfReviews": 0,
      "images": [],
      "reviews": [],
      "createdAt": "2022-06-24T19:13:31.336Z",
      "__v": 0
    }
  ]

  const [topProduct, setTopProduct] = useState(initialTopProducts);

  const initialdealoftheday = [

    {
      "_id": "62b60cdbef72ad021ab7b93b",
      "name": "Lichi",
      "description": "red refreshing",
      "price": 700,
      "ratings": 0,
      "category": "fruits",
      "Stock": 1,
      "numOfReviews": 0,
      "images": [],
      "reviews": [],
      "createdAt": "2022-06-24T19:13:31.336Z",
      "__v": 0
    },
    {
      "_id": "62b60cdbef72ad021ab7b93b",
      "name": "Lichi",
      "description": "red refreshing",
      "price": 700,
      "ratings": 0,
      "category": "fruits",
      "Stock": 1,
      "numOfReviews": 0,
      "images": [],
      "reviews": [],
      "createdAt": "2022-06-24T19:13:31.336Z",
      "__v": 0
    },
    {
      "_id": "62b60cdbef72ad021ab7b93b",
      "name": "Lichi",
      "description": "red refreshing",
      "price": 700,
      "ratings": 0,
      "category": "fruits",
      "Stock": 1,
      "numOfReviews": 0,
      "images": [],
      "reviews": [],
      "createdAt": "2022-06-24T19:13:31.336Z",
      "__v": 0
    },
    {
      "_id": "62b60cdbef72ad021ab7b93b",
      "name": "Lichi",
      "description": "red refreshing",
      "price": 700,
      "ratings": 0,
      "category": "fruits",
      "Stock": 1,
      "numOfReviews": 0,
      "images": [],
      "reviews": [],
      "createdAt": "2022-06-24T19:13:31.336Z",
      "__v": 0
    }

  ]

  const [dealoftheday, setDealoftheday] = useState(initialdealoftheday);

  const productsInitial = [
    // {
    //   "_id": "62b5dbdf49e8b3264edf5a42",
    //   "name": "ak",
    //   "description": "evvvvvvvv",
    //   "price": 566,
    //   "ratings": 0,
    //   "category": "eev",
    //   "Stock": 1,
    //   "numOfReviews": 0,
    //   "images": [],
    //   "reviews": [],
    //   "createdAt": "2022-06-24T15:44:31.759Z",
    //   "__v": 0
    // },
    // {
    //   "_id": "62b5f7a7b7a3aa2d4e019c26",
    //   "name": "ak",
    //   "description": "evvvvvvvv",
    //   "price": 566,
    //   "ratings": 0,
    //   "category": "eev",
    //   "Stock": 1,
    //   "numOfReviews": 0,
    //   "images": [],
    //   "reviews": [],
    //   "createdAt": "2022-06-24T17:43:03.415Z",
    //   "__v": 0
    // },
    // {
    //   "_id": "62b5f81bb7a3aa2d4e019c29",
    //   "name": "bkkk",
    //   "description": "jhhbaaaaa",
    //   "price": 566,
    //   "ratings": 0,
    //   "category": "eev",
    //   "Stock": 1,
    //   "numOfReviews": 0,
    //   "images": [],
    //   "reviews": [],
    //   "createdAt": "2022-06-24T17:44:59.601Z",
    //   "__v": 0
    // },
    // {
    //   "_id": "62b5fbf6e6bf8ace14ff4513",
    //   "name": "jvhyv",
    //   "description": "jhhbaaaaa",
    //   "price": 888,
    //   "ratings": 0,
    //   "category": "eev",
    //   "Stock": 1,
    //   "numOfReviews": 0,
    //   "images": [],
    //   "reviews": [],
    //   "createdAt": "2022-06-24T18:01:26.309Z",
    //   "__v": 0
    // },
    // {
    //   "_id": "62b60174e6bf8ace14ff4516",
    //   "name": "jvhyv",
    //   "description": "jhhbaaaaa",
    //   "price": 888,
    //   "ratings": 0,
    //   "category": "eev",
    //   "Stock": 1,
    //   "numOfReviews": 0,
    //   "images": [],
    //   "reviews": [],
    //   "createdAt": "2022-06-24T18:24:52.221Z",
    //   "__v": 0
    // },
    // {
    //   "_id": "62b601b2e6bf8ace14ff4519",
    //   "name": "mayur",
    //   "description": "jhhbaaaaa",
    //   "price": 888,
    //   "ratings": 0,
    //   "category": "eev",
    //   "Stock": 1,
    //   "numOfReviews": 0,
    //   "images": [],
    //   "reviews": [],
    //   "createdAt": "2022-06-24T18:25:54.644Z",
    //   "__v": 0
    // },
    // {
    //   "_id": "62b601cae6bf8ace14ff451c",
    //   "name": "mayur",
    //   "description": "jhhbaaaaa",
    //   "price": 888,
    //   "ratings": 0,
    //   "category": "eev",
    //   "Stock": 1,
    //   "numOfReviews": 0,
    //   "images": [],
    //   "reviews": [],
    //   "createdAt": "2022-06-24T18:26:18.377Z",
    //   "__v": 0
    // },
    // {
    //   "_id": "62b60284c1895612bba53798",
    //   "name": "Keyur Shimpi",
    //   "description": "best wheat",
    //   "price": 2,
    //   "ratings": 0,
    //   "category": "dsv",
    //   "Stock": 0,
    //   "numOfReviews": 0,
    //   "images": [],
    //   "reviews": [],
    //   "createdAt": "2022-06-24T18:29:24.758Z",
    //   "__v": 0
    // },
    // {
    //   "_id": "62b60526c1895612bba5379d",
    //   "name": "yelande",
    //   "description": "jhhbaaaaa",
    //   "price": 888,
    //   "ratings": 0,
    //   "category": "eev",
    //   "Stock": 1,
    //   "numOfReviews": 0,
    //   "images": [],
    //   "reviews": [],
    //   "createdAt": "2022-06-24T18:40:38.288Z",
    //   "__v": 0
    // },
    // {
    //   "_id": "62b6054cc1895612bba537a0",
    //   "name": "mayur2",
    //   "description": "jhhbaaaaa",
    //   "price": 888,
    //   "ratings": 0,
    //   "category": "eev",
    //   "Stock": 1,
    //   "numOfReviews": 0,
    //   "images": [],
    //   "reviews": [],
    //   "createdAt": "2022-06-24T18:41:16.031Z",
    //   "__v": 0
    // },
    // {
    //   "_id": "62b60581c1895612bba537a4",
    //   "name": "sfdvv",
    //   "description": "sfsdgghfcttttdjjsfffffffbhn",
    //   "price": 2,
    //   "ratings": 0,
    //   "category": "cereals",
    //   "Stock": 1,
    //   "numOfReviews": 0,
    //   "images": [],
    //   "reviews": [],
    //   "createdAt": "2022-06-24T18:42:09.955Z",
    //   "__v": 0
    // },
    // {
    //   "_id": "62b607a8ef72ad021ab7b92c",
    //   "name": "lokwan",
    //   "description": "good quality wheat",
    //   "price": 200,
    //   "ratings": 0,
    //   "category": "Cereals",
    //   "Stock": 1,
    //   "numOfReviews": 0,
    //   "images": [],
    //   "reviews": [],
    //   "createdAt": "2022-06-24T18:51:20.623Z",
    //   "__v": 0
    // },
    // {
    //   "_id": "62b60b7eef72ad021ab7b932",
    //   "name": "aaaaaaaaaaaaaaa",
    //   "description": "aaaaaaaaaaaaaaaa",
    //   "price": 2,
    //   "ratings": 0,
    //   "category": "cereals",
    //   "Stock": 1,
    //   "numOfReviews": 0,
    //   "images": [],
    //   "reviews": [],
    //   "createdAt": "2022-06-24T19:07:42.617Z",
    //   "__v": 0
    // },
    // {
    //   "_id": "62b60bceef72ad021ab7b936",
    //   "name": "Keyur Shimpi",
    //   "description": "best wheat",
    //   "price": 13,
    //   "ratings": 0,
    //   "category": "dsv",
    //   "Stock": 1,
    //   "numOfReviews": 0,
    //   "images": [],
    //   "reviews": [],
    //   "createdAt": "2022-06-24T19:09:02.358Z",
    //   "__v": 0
    // },
    // {
    //   "_id": "62b60cdbef72ad021ab7b93b",
    //   "name": "apple",
    //   "description": "red juicy",
    //   "price": 100,
    //   "ratings": 0,
    //   "category": "fruits",
    //   "Stock": 1,
    //   "numOfReviews": 0,
    //   "images": [],
    //   "reviews": [],
    //   "createdAt": "2022-06-24T19:13:31.336Z",
    //   "__v": 0
    // }
  ];

  const [products, setProducts] = useState(productsInitial);





  //Get all Products
  const getProducts = async () => {

    //API call
    const response = await fetch(`${host}/api/v1/products`, {
      method: 'GET',
      //mode: 'cors',   
      headers: {
        'Content-Type': 'application/json',
        //   'token': localStorage.getItem('token')

      },
    });
    const json = await response.json();
    //console.log(json);
    setProducts(json.Products);
  }

  const dealProductsInitial = [];
  const [dealproducts, setDealproducts] = useState(dealProductsInitial);

  const dotd = [];
  const [dotdproducts, setDotdproducts] = useState(dotd);

  //top products
  const topProducts = async () => {

    //API call
    const response = await fetch(`${host}/api/v1/products/deal`, {
      method: 'GET',
      //mode: 'cors',   
      headers: {
        'Content-Type': 'application/json',
        //   'token': localStorage.getItem('token')

      },
    });
    const json = await response.json();
    //console.log(json);
    setDealproducts(json.dealProducts);
    setDotdproducts(json.topProducts);
  }

  //Add a product
  const addProduct = async (name, description, price, category, Stock, images) => {
    //TODO: API call

    const response = await fetch(`${host}/api/v1/products/new_product`, {
      method: 'POST',
      //mode: 'cors',   
      headers: {
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token')

      },
      body: JSON.stringify({ name, description, price, category, Stock, images }) // body data type must match "Content-Type" header
    });
    const json = await response.json();

    console.log(localStorage.getItem('token'))

    //Logic to add in client side
    console.log("adding a new product")
    const product = json;
    setProducts(products.concat(product));
  }

  //EXCEPTION    user
  //Get logged in user info to display it on the profile

  //get user info
  const info = {
    "success": true,
    "user": {
      "avatar": {
        "public_id": "abcd",
        "url": "wwmknn"
      },
      "_id": "62b4ac9efe789ed7c3d19da6",
      "name": "akshay satpute",
      "email": "aku@gmail.com",
      "role": "user",
      "createdAt": "2022-06-23T18:10:38.524Z",
      "__v": 0
    }
  }

  const [userInfo, setUserInfo] = useState(info);

  //get user info
  const getUserInfo = async () => {

    //API call
    const response = await fetch(`${host}/api/v1/self`, {
      method: 'GET',
      //mode: 'cors',   
      headers: {
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token')
      },
    });
    const json = await response.json();
    //console.log(json);
    setUserInfo(json.user);
  }


  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: []
  });

  const [filterState, filterDispatch] = useReducer(filterReducer, {
    byStock: false,
    searchQuery: "",
  });


  return (

    <productContext.Provider value={{ products, dealoftheday, getProducts, topProducts, dealproducts, dotdproducts, addProduct, getUserInfo, userInfo, state, dispatch, filterState, filterDispatch }}>
      {props.children}
    </productContext.Provider>
  )
}

export default ProductState;