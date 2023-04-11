const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
    placename: String,
    cityname: String,
    countryname: String
    
})
// profileSchema.methods.insert = function insert() {

// }

const profiles = mongoose.model('profiles', profileSchema)

module.exports = {profiles}