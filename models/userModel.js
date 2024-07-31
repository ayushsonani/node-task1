const { default: mongoose } = require("mongoose");
const mongoos = require("mongoose");

const userSchema = mongoos.Schema(
    {
    name:String,
    email:String,
    dob:String,
    bio:{
        type:String,
        default:String
    },
    age:Number,
    profileimage:String,
    password:String,
    gender:{
        type:String,
        eum: ["male", "female"] 
    },
    isBlock:{
        type:String,
        default :false
    },
    isOnline: { 
        type: Boolean, 
        default: false 
    },
    isVerified: { 
        type: Boolean, 
        default: false 
    },
    uniqueId: String,
    username: String,
},
{
    versionKey: false,
    timeStamp: true,
});


module.exports = mongoose.model("User",userSchema);
