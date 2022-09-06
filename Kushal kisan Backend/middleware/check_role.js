const ErrorHander = require("../utils/errorhander");
//const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
//const User = require("../models/userModel");

exports.check_ROLES = (...roles) => {
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
    }
};
