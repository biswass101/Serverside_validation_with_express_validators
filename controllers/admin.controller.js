const Admin = require('../models/admin.model')

const registerAdmin = async (req, res) => {
    try {
        const {name, email, password} = req.body

        const newAdmin = new Admin({
            name, email, password
        })

        await newAdmin.save()

        res.status(201).json({
            message: "Admin was created",
            newAdmin
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const loginAdmin = async (req, res) => {
    try {
        const {email, password} = req.body
        const findAdmin = await Admin.findOne({email: email})
        if(findAdmin) {
            if(email === findAdmin.email && password === findAdmin.password)
            {
                res.status(200).json({
                    message: 'Admin was loggedIn'
                })
            } else {
                res.status(400).json({
                    message: 'wrong password. Try again!'
                })
            }
        } else {
            res.status(400).json({
                message: "Admin not found"
            })
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = { registerAdmin, loginAdmin }