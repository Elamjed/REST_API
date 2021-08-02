const express = require('express') 
require('dotenv').config({path:'./config/.env'})
const connectedb=require('./config/connectdb')

const app = express()
const PORT=process.env.PORT
console.log(PORT)
connectedb()

app.use(express.json())
app.use('/Users', require('./Routes/UserRoute'))
app.listen(PORT, (err) => {
    (err)?console.error(err):
    console.log(`connected at http://localhost:${PORT}`)
})