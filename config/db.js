const mongoose = require('mongoose')
const config = require('./confi')

const dbURL = config.db.url

mongoose.connect(dbURL)
 .then(() => {
    console.log('mongodb atlas is connected');
 })
 .catch((err) => {
    console.log(err);
    process.exit(1)
 })