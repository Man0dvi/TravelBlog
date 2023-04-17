const fs = require('fs');
const {blogs} = require('../models/blogsModel');
const path = require('path');
// const cloudinary = require("cloudinary").v2; 
exports.insert = async (req,res) =>{
    let data = JSON.parse(JSON.stringify(req.body));
    data.blogTitleImg = {
        data: fs.readFileSync(path.join(__dirname + '/../../uploads/' + req.file.filename)),
        contentType: 'image/png'
    }
    console.log(data)
    let newblogs = new blogs(data);
    newblogs.save();
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
