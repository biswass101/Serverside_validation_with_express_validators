const express = require('express');
const app = express();
const userRouter = require('./routes/user.router')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) =>{
    res.send("Hello Server")
})

app.use('/api', userRouter)

module.exports = app