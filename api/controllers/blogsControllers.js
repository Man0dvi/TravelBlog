var {blogs} = require('../models/blogsModel');
var ObjectId = require('mongoose').Types.ObjectId;
 
exports.insert = async (req,res) =>{
    console.log(req.body)
    let newblogs = new blogs(JSON.parse(JSON.stringify(req.body)));
    newblogs.save();
}