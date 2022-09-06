import React, { useContext, useState } from 'react';
import productContext from '../context/products/productContext';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'


const Addproductform = () => {

    const [imageSelected, setImageSelected] = useState("")

    // const uplodImage = ()=>{
    //     //console.log(files[0])
    //     const formData = new FormData()
    //     formData.append("file", imageSelected)
    //     formData.append("upload_preset", "KisanAppProductImage")

    //     Axios.post("https://api.cloudinary.com/v1_1/dv9dt8wkp/image/upload", formData.then((response)=>
    //         console.log(response);
    //     ))
    // };

    var image_url = "";
    const context = useContext(productContext);
    const { addProduct } = context;

    const navigate = useNavigate();

    const [product, setProduct] = useState({ name: "", description: "", price: "", category: "", Stock: "" })

    const handleClick = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append("file", imageSelected)
        formData.append("upload_preset", "KisanAppProductImage")
        let images = "jkkl";

        console.log("Handle click called")
        Axios.post("https://api.cloudinary.com/v1_1/dv9dt8wkp/image/upload", formData)
            .then((response) => {
                console.log("After1")
                console.log(response.data.secure_url);
                //image_url = response.data.secure_url;
                images = response.data.secure_url;
            })
            .then(() => {
                console.log("After2")
                addProduct(product.name, product.description, product.price, product.category, product.Stock, images);
                setProduct({ name: "", description: "", price: "", category: "", Stock: "" })
                navigate('/profile');

            })

        console.log("Before")

    }

    const onChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
        console.log(product);

    }

    return (
        <div className="my-3 mx-3">
            <form >

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Product Name</label><br />
                    <input type="text" placeholder='Product Name' className="form-control" id="name" name="name" onChange={onChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label><br />
                    <input type="textarea" className="form-control" id="description" name="description" onChange={onChange} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="price" className="form-label">price</label><br />
                    <input type="number" className="form-control" id="price" name="price" onChange={onChange} required />
                </div>

                {/* <div className="mb-3">
                <label htmlFor="image" className="form-label">Image</label><br/>
                <input type="text" className="form-control" id="image" name="image" onChange={onChange} required/>
            </div> */}

                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category</label><br />
                    <input type="text" className="form-control" id="category" name="category" onChange={onChange} required />
                </div>

                {/* //// */}
                {/* <div class="input-group mb-3">
                    <label htmlFor="category" className="form-label">Category</label><br />
                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Fruits</a></li>
                        <li><a class="dropdown-item" href="#">Cereals</a></li>
                        <li><a class="dropdown-item" href="#">Dairy Product</a></li>
                        <li><a class="dropdown-item" href="#">Vegetables</a></li>
                    </ul>
                    <input type="text" class="form-control" aria-label="Text input with dropdown button" onChange={onChange} required />
                </div> */}


                <div className="mb-3">
                    <label htmlFor="Stock" className="form-label">Stock</label><br />
                    <input type="number" className="form-control" id="Stock" name="Stock" onChange={onChange} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="Image" className="form-label">Image</label><br />
                    <input type="file" className="form-control" id="Image" name="Image" onChange={(event) => {
                        setImageSelected(event.target.files[0]);
                    }} />
                </div>




                <button onClick={handleClick} type="submit" className="btn btn-primary">Add Product</button>

            </form>



        </div>
    )
}

export default Addproductform
