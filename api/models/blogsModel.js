const mongoose = require('mongoose')

const blogsSchema = new mongoose.Schema({
    placename: String,
    cityname: String,
    countryname: String
    
})
// blogsSchema.methods.insert = function insert() {

// }

const blogss = mongoose.model('blogss', blogsSchema)

module.exports = {blogss}