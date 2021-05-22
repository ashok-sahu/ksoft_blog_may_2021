require('dotenv').config()
const colors = require('colors')
const app = require('./server/app')

app.listen(process.env.PORT,()=>{
    console.log(`server is running on http://localhost:${process.env.PORT}`.green.bold)
})
