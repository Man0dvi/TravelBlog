const mongoose = require('mongoose')

const blogsSchema = new mongoose.Schema({
    blogTitle: String,
    blogCity: String,
    blogCountry: String,
    blogPlace: String,
    blogDescription: String,
    blogTransport:String,
    blogDate:String,
    blogTitleImg: Buffer
});
const blogs = mongoose.model('blogs', blogsSchema)
module.exports = {blogs}