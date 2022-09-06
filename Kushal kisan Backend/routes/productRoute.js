const express = require("express");
const { getAllproduct, create_new_product, UpdateProduct, DeleteProduct, getProductDetails, deal_product } = require("../controllers/productController");
const { check_ROLES } = require("../middleware/check_role");
const { isauth, is_farmer } = require("../middleware/is_auth");

const router = express.Router();

router.route("/products").get(getAllproduct);
router.route("/products/deal").get(deal_product);
//console.log("process start")
router.route("/products/new_product").post(isauth, check_ROLES("farmer"), create_new_product);
router.route("/products/:id").put(isauth, is_farmer("admin"), UpdateProduct).delete(isauth, is_farmer("admin"), DeleteProduct).get(getProductDetails);

module.exports = router;