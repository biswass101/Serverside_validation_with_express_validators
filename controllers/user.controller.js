
//name, email, password, dob
const registerUser = (req, res) => {
    try {
        const {name, email, password, dob} = req.body

        const newUser = {
            name, email, password, dob
        }

        res.status(200).json({
            message: "User was created",
            newUser
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

const logInUser = (req, res) => {
    try {
        const {email, password} = req.body
        if(email === 'biswassnaeemcse@gmail.com' && password === 'bin101Naeem') {
            res.status(200).json({
                message: "User was loggedIn",
            })
        } else {
            res.status(400).json({
                message: "email/password is wrong",
            })
        }
        
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = { registerUser, logInUser }