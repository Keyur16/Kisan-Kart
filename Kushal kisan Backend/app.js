const express = require("express");
var cors = require('cors');
const cookie_parser = require('cookie-parser');
const app = express();
const errmid = require("./middleware/error")
const fileupload = require('express-fileupload');

app.use(cors())
//const body_parser=require("body-parser");
const bodyParser = require('body-parser')
//console.log("akshy")


app.use(fileupload({
    useTempFiles: true
}))
app.use(bodyParser.json()) // for parsing application/json

app.use(express.json());
//app.use(bodyParser.json());
app.use(cookie_parser());
//app.use(body_parser.urlencoded({ extended: true }));
//route imports

const product = require("./routes/productRoute");
//console.log("product route end in app js");
const user = require("./routes/userRoute");
const agri = require("./routes/agriRoutes");
app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", agri);


// middleware
app.use(errmid);
//console.log("akshy")
module.exports = app