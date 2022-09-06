const mongoose = require("mongoose");

const agri_tourismSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        district: {
            type: String,
            //required: true
        },
        taluka: {
            type: String,
            //required: true
        },
        village: {
            type: String,
            //required: true
        }
    },
    farmer_info: {
        name: {
            type: String,
            //required: true
        },
        contact_no: {
            type: Number,
            //required: true
        }
    },
    farm_info: {
        size: {
            type: Number,
            //required: true
        },
        crops_grown: [{
            type: String
        }],
    },
    facilities: [{
        type: String,
        //required: true
    }],
    food_menu: [{
        type: String
    }],
    Price: {
        type: Number,
        //required: true
    },
    images: [
        {
            public_id: {
                type: String,
                //required: true,
            },
            url: {
                type: String,
                //required: true,
            },
        },
    ],
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: "User",
                //required: true,
            },
            name: {
                type: String,
                //required: true,
            },
            rating: {
                type: Number,
                //required: true,
            },
            comment: {
                type: String,
                //required: true,
            },
        },
    ],
    start_date: {
        type: Date,
        //required: true
    }


})
module.exports = mongoose.model("agri_tourism", agri_tourismSchema);