const agri_tourism = require("../modules/agrotourism_model");
const ErrorHander = require("../utils/errorhander");
const async_error_handler = require("../middleware/async_error_handler");
const Filtering = require("../utils/filtering");
//console.log("productcontroller called");
//for farmers only to create product
exports.create_new_tour = async_error_handler(async (req, res, nex) => {
    req.body.user = req.user.id;
    const new_tour = await agri_tourism.create(req.body);
    console.log("create tour called");
    res.status(200).json
        ({
            sucess: true,
            message: "tour created sucessfully",
            new_tour
        })

});

// to get all tour
exports.getAllTour = async_error_handler(async (req, res) => {
    const resultPerPage = 8;
    const toursCount = await agri_tourism.countDocuments();

    const Filter = new Filtering(agri_tourism.find(), req.query)
        .search()
        .filter();

    let Tours = await Filter.query;

    let filteredToursCount = Tours.length;

    //   Filter.pagination(resultPerPage);

    //Products = await Filter.query;

    res.status(200).json({
        success: true,
        Tours,
        toursCount,
        resultPerPage,
        filteredToursCount,
    });
});
exports.getTourDetails = async_error_handler(async (req, res, next) => {

    const Tour = await agri_tourism.findById(req.params.id);

    if (!Tour) {
        console.log(req.params.id);
        //return next(new ErrorHander("Product not found", 404));
        //const er=new ErrorHander("Product not found", 404);
        //console.log(er.message,er.statusCode);
        return next(new ErrorHander("Product not found", 404));


    }



    res.json({
        sucess: true,
        Tour
    })

});
// for farmers only to update product

exports.UpdateTour = async_error_handler(async (req, res, nex) => {

    let Tour = await agri_tourism.findById(req.params.id);

    if (!Tour) {
        return next(new ErrorHander("Product not found", 404));

    }

    Tour = await agri_tourism.findByIdAndUpdate(req.params.id, req.body);

    res.json({
        sucess: true,
        Tour
    })


});

//delete a product

exports.DeleteTour = async_error_handler(async (req, res, nex) => {

    const Tour = await agri_tourism.findById(req.params.id);

    if (!Tour) {
        return next(new ErrorHander("Product not found", 404));

    }

    await Tour.remove();

    res.json({
        sucess: true,
        message: "product deleted"
    })

});