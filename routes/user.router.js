const router = require('express').Router()
const { registerUser, logInUser } = require('../controllers/user.controller')
const { runValidation } = require('../validations/validation')
const { userRegistrationValidators, userLoginValidators } = require('../validations/auth.user')
router.post('/register',
    userRegistrationValidators, 
    runValidation,
    registerUser
)
router.post('/login', 

    userLoginValidators,
    runValidation,
    logInUser
)

module.exports = router