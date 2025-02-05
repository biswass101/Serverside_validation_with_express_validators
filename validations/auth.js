const { check } = require("express-validator");

exports.userRegistrationValidators = [
    check("name")
     .trim()
     .notEmpty()
     .withMessage("Name is missing")
     .isLength({min: 5})
     .withMessage("name must have at least 5 characters")
     .isLength({max: 10})
     .withMessage("Name can have at most 10 characters")
    ,
    check("email")
     .trim()
     .notEmpty()
     .withMessage("email is missing")
     .isEmail()
     .withMessage("Not a valid email")
    ,
    check("password")
     .trim()
     .notEmpty()
     .withMessage("password is missing")
     .isLength({min: 5})
     .withMessage("password must have at leat 5 characters")
    ,
    check("dob")
     .trim()
     .notEmpty()
     .withMessage("dob is missing")
     .isISO8601() //checkin date formate
     .toDate() //converting int o date
     .withMessage("not a valid date")
]

exports.userLoginValidators = [
    check("email")
     .trim()
     .notEmpty()
     .withMessage("email is missing")
     .isEmail()
     .withMessage("Not a valid email")
    ,
    check("password")
     .trim()
     .notEmpty()
     .withMessage("password is missing")
     .isLength({min: 5})
     .withMessage("password must have at leat 5 characters")
]