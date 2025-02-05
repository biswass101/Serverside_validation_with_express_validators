const registerAdmin = (req, res) => {
    try {
        const {name, email, password} = req.body

        const newAdmin = {
            name, email,password
        }

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

const loginAdmin = (req, res) => {
    try {
        const {email, password} = req.body
        if(email === 'biswassnaeemcse@gmail.com' && password === 'bin101Naeem') {
            res.status(200).json({
                message: 'Admin was loggedIN'
            })
        } else {
            res.status(400).json({
                message: "email/password is wrong"
            })
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = { registerAdmin, loginAdmin }