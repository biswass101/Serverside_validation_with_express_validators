const {validationResult } = require("express-validator")

exports.runValidation = (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const getErrors = errors.array().map((error) => error.msg)
        return res.status(400).json({
            errors: getErrors
        })
    }
    next()

}