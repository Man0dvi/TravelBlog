var {blogs} = require('../models/blogsModel');
var ObjectId = require('mongoose').Types.ObjectId;
// const cloudinary = require("cloudinary").v2; 
exports.insert = async (req,res) =>{
    console.log(req.body)
    let newblogs = new blogs(JSON.parse(JSON.stringify(req.body)));
    newblogs.save();
    const file = req.files?.image;
    // cloudinary.uploader.upload(file.tempFilePath, async (err, result) => {
    //     console.log(result.url);
    //     console.log(req.body)
    //     let newBlogs = new Blogs(JSON.parse(JSON.stringify(req.body)));
    //     newBlogs.save();
    // })
}

exports.index = async (req,res) => {
    console.log(req.query)
    try{
        const data = await blogs.find(req.query || {});
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}
