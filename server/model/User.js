const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
    userName:{
        type : String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    }, 
    isVerified:{
        type: Boolean,
        default: false

    } 
})

module.exports = mongoose.model('UserTest2',userSchema);