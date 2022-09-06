const express = require("express");
const { registerUser, loginUser, logout, forgotPassword, resetPassword, getUserDetails, updatePassword, getMyProduct } = require("../controllers/userController");
const { isauth } = require("../middleware/is_auth");
const router = express.Router();

console.log("user route called");
router.route("/register").post(registerUser);
router.route("/myproduct").get(isauth, getMyProduct);
router.route("/login").post(loginUser);
router.route("/logout").post(logout);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/self").get(isauth, getUserDetails);
router.route("/password/update").put(isauth, updatePassword);
module.exports = router;