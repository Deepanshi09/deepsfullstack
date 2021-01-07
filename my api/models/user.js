var mongoose=require('mongoose');
var userschema = mongoose.Schema({

    "name":{type:String},
    "age":{type:String},
    "email":{type:String},
    "password":{type:String},
    "mobileNo":{type:String},
    "location":{type:String}
})
module.exports = mongoose.model('user',userschema)