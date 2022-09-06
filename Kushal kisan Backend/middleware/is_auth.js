const async_error_handler = require("../middleware/async_error_handler");
const ErrorHander = require("../utils/errorhander");
const jwt = require("jsonwebtoken");
const User = require("../modules/user_model");

exports.isauth = async_error_handler(async (req, res, next) => {
  console.log("authentication starts");
  const token = req.header('token');
  console.log(token);
  console.log("isauth called");

  if (!token) {
    return next(new ErrorHander("Please Login to access this resource", 401));
  }

  const decodedData = jwt.verify(token, process.env.JWT_PRIVATE);//ak.print(); // ak->print();

  req.user = await User.findById(decodedData.id);

  console.log("auth sucessful");
  next();
});

//for farmer checking 
exports.is_farmer = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHander(
          `Role: ${req.user.role} is not allowed to access this resouce `,
          403
        )
      );
    }

    next();
  };
};