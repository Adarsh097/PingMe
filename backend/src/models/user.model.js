import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    email : {
        type :String,
        required : true,
        unique : true,
        trim : true,
        lowercase : true
    },
    fullName : {
        type : String,
        required : true,
        trim : true,
    },
    password : {
        type : String,
        required : true,
        minlength : 6
    },
    profilePic : {
        type : String, 
        default : ""
    },
});

export default mongoose.model("User",userSchema);