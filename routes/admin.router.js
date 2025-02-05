const { registerAdmin, loginAdmin } = require('../controllers/admin.controller')
const { adminRegistrationValidators, adminLoginVAlidators } = require('../validations/auth.admin')
const { runAdminValidation } = require('../validations/runAdminValidation')

const router = require('express').Router()

router.post('/register',
    adminRegistrationValidators,
    runAdminValidation,
    registerAdmin
)

router.post('/login', 
    adminLoginVAlidators, 
    runAdminValidation, 
    loginAdmin
)

module.exports = router