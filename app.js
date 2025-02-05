const express = require('express');
const app = express();
const userRouter = require('./routes/user.router')
const adminRouter = require('./routes/admin.router')
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) =>{
    res.send("Hello Server")
})

app.use('/api/user', userRouter)

app.use('/api/admin', adminRouter)

module.exports = app