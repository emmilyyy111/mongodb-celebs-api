const mongoose = require('mongoose')


const genreSchema = mongoose.Schema({
    name: String,
    age: Number,
    industry: String,
    millionaire: Boolean
})

module.exports = mongoose.model('Genre', genreSchema)
