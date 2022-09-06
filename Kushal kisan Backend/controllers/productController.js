const product = require("../modules/product_model");
const ErrorHander = require("../utils/errorhander");
const async_error_handler = require("../middleware/async_error_handler");
const Filtering = require("../utils/filtering");
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: 'dv9dt8wkp',
    api_key: '772955326592746',
    api_secret: 'NHwg0swJHLym3I9eUfEQpR6JY2E',
    secure: true
});

//console.log("productcontroller called");
//for farmers only to create product
exports.create_new_product = async_error_handler(async (req, res, nex) => {
    console.log("uploading");
    console.log(req.body);

    // const file = req.files.photo;
    // cloudinary.uploader.upload(file.tempFilePath, async (err, result) => {
    //     console.log(result);
    //     req.body.user = req.user.id;
    //     req.body.images = req.result.url;
    //     const new_product = await product.create(req.body);
    //     console.log("create product called");
    //     res.status(200).json
    //         ({
    //             sucess: true,
    //             message: "product created sucessfully",
    //             new_product
    //         })
    // })
    req.body.user = req.user.id;
    //req.body.images = req.result.url;
    const new_product = await product.create(req.body);
    console.log("create product called");
    res.status(200).json
        ({
            sucess: true,
            message: "product created sucessfully",
            new_product
        })

});

// to get all products
exports.getAllproduct = async_error_handler(async (req, res) => {
    const resultPerPage = 8;
    const productsCount = await product.countDocuments();

    const Filter = new Filtering(product.find(), req.query)
        .search()
        .filter();

    let Products = await Filter.query;

    let filteredProductsCount = Products.length;

    //   Filter.pagination(resultPerPage);

    //Products = await Filter.query;

    res.status(200).json({
        success: true,
        Products,
        productsCount,
        resultPerPage,
        filteredProductsCount,
    });
});
exports.deal_product = async_error_handler(async (req, res) => {


    const len = await product.find().count();
    console.log(len);
    const dealProducts = await product.find().limit(6);

    const topProducts = await product.find().limit(8).skip(6);



    console.log(dealProducts);





    //   Filter.pagination(resultPerPage);

    //Products = await Filter.query;

    res.status(200).json({
        success: true,
        dealProducts,
        topProducts
    });
});
exports.getProductDetails = async_error_handler(async (req, res, next) => {

    const Product = await product.findById(req.params.id);

    if (!Product) {
        console.log(req.params.id);
        //return next(new ErrorHander("Product not found", 404));
        //const er=new ErrorHander("Product not found", 404);
        //console.log(er.message,er.statusCode);
        return next(new ErrorHander("Product not found", 404));


    }



    res.json({
        sucess: true,
        Product
    })

});
// for farmers only to update product

exports.UpdateProduct = async_error_handler(async (req, res, nex) => {

    let Product = await product.findById(req.params.id);

    if (!Product) {
        return next(new ErrorHander("Product not found", 404));

    }

    Product = await product.findByIdAndUpdate(req.params.id, req.body);

    res.json({
        sucess: true,
        Product
    })


});

//delete a product

exports.DeleteProduct = async_error_handler(async (req, res, nex) => {

    const Product = await product.findById(req.params.id);

    if (!Product) {
        return next(new ErrorHander("Product not found", 404));

    }

    await Product.remove();

    res.json({
        sucess: true,
        message: "product deleted"
    })

});