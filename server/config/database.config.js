const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const connectDB = async() => {
    try {
        await mongoose.connect()
    } catch (error) {
        
    }
}

module.exports = connectDB