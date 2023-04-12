const mongoose = require('mongoose')

const blogsSchema = new mongoose.Schema({
    placename: String,
    cityname: String,
    countryname: String,
    // image:{type:String},
    budget: String,
    todo:String,
    transport:String,
    stay:String,
    description:String,
    blogTitle:String,
    
})
// blogsSchema.methods.insert = function insert() {

// }

const blogs = mongoose.model('blogs', blogsSchema)

module.exports = {blogs}