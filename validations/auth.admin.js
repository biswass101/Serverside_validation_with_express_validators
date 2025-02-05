const { check } = require("express-validator");

exports.adminRegistrationValidators = [
    check('name')
     .trim()
     .notEmpty()
     .withMessage("Name dach nai bhai tor!")
     .isLength({min: 6})
     .withMessage("Bhai minimun 6 ta character howon lagbo!")
     .isLength({max: 100})
     .withMessage("Are bhai maximum 100 ta character howon lagbo!")
    ,
    check("email")
     .trim()
     .notEmpty()
     .withMessage("Email to lagbo naki???")
     .isEmail()
     .withMessage("Email this nai!")
    ,
    check("password")
     .trim()
     .notEmpty()
     .withMessage("Password kew khali day??")
     .isLength({min: 5})
     .withMessage("password kompokkhe 5 character howon lagbo!!")
]

exports.adminLoginVAlidators = [
    check("email")
     .trim()
     .notEmpty()
     .withMessage("Email dewon lagobo bhai!!")
     .isEmail()
     .withMessage("Email Thik nai bhai....Valo kre dee!!")
    ,
    check("password")
     .trim()
     .notEmpty()
     .withMessage("password to dech ei nai!!!!")
     .isLength({min: 5})
     .withMessage("password kompokkhe 5 ta character howon lagbo")
]