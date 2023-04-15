const fs = require('fs');
const {blogs} = require('../models/blogsModel');
const path = require('path');
// const cloudinary = require("cloudinary").v2; 
exports.insert = async (req,res) =>{
    console.log(req.body)
    let data = JSON.parse(JSON.stringify(req.body));
    console.log(req.file)
    data.blogTitleImg = {
        data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file)),
        contentType: 'image/png'
    }
    let newblogs = new blogs();
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
