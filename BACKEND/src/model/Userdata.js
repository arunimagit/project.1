//accessing Mogoose package
const mongoose = require('mongoose');
//Database connection
mongoose.connect('mongodb://localhost:27017/Pro');

//Schema definition
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullname:String,
    email:String,
    password:String
    
});

//Model creation
var Userdata = mongoose.model('userdata',UserSchema);

module.exports = Userdata;