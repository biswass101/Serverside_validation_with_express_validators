const User = require('../models/user.model')

//name, email, password, dob
const registerUser = async (req, res) => {
    try {
        const {name, email, password, dob} = req.body

        const newUser = new User({
            name, email, password, dob
        }) 

        await newUser.save()

        res.status(200).json({
            message: "User was created",
            newUser
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

const logInUser = async (req, res) => {
    try {
        const {email, password} = req.body
        const findUser = await User.findOne({email: email})
        if(findUser) {
            if(email === findUser.email && password === findUser.password)
            {
                res.status(200).json({
                    message: 'User was loggedIn'
                })
            } else {
                res.status(400).json({
                    message: 'wrong password. Try again!'
                })
            }
        } else {
            res.status(400).json({
                message: "user not found"
            })
        }
        
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = { registerUser, logInUser }