var {profiles} = require('../models/profileModel');
var ObjectId = require('mongoose').Types.ObjectId;

exports.index = (req,res)=> {
    profiles.find((err,docs)=>{
        if(!err) res.send(docs);
        else res.status(500).send(err);S
    });
};

exports.searchById = (req,res) =>{
    let id = req.params.id;
    res.send("Id found"+id);
}
 
exports.insert = async (req,res) =>{
    console.log(req.body)
    let newprofiles = new profiles(JSON.parse(JSON.stringify(req.body)));
    newprofiles.save();
}

exports.update =(req,res)=>{

    console.log(req.params.id);
    if(!ObjectID.isValid(req.params.id))
    return res.send(400).send('No record with given id:'+ req.params.id)

    let profile_item=req.body.profile;
    let new_profile = {profile:profile_item};

   profiles.findByIDAndUpdate(req.params.id,{$set:new_profile},{new:true},(err,docs)=>{
    if(!err) res.status(200).send(docs)
    else console.log('Error while updating the data'+JSON.stringify(err,undefined,2))
   
   }) 
}

exports.delete =(req,res)=>{
    if(!ObjectID.isValid(req.params.id))
    return res.send(400).send('No record with given Id: '+req.params.id)

    profiles.findByIDAndRemove(req.params.id,(err,docs)=>{
        let result={
            data:docs,
            message:"profile has been removed successfulyy.",
            status:200
        }
        
        if(!err) res.status(200).send(result);
        else res.status(500).send(err)
    })
}
