const app = require('./app')
const port = 3002;

app.listen(port, () => {
    console.log("Server is runnig at http://localhost:"+port)
})