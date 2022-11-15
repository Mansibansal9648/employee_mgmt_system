const mongoose = require('mongoose')
const Schema= mongoose.Schema;
const schema=new Schema({
    name:{type:String,required:true},
    role:{type:String,required:true},
    designation:{type:String,required:true},
    project:{type:String,required:true},
    experience:{type:String,required:true},
    email:{type:String,required:true},
    salary:{type:String},
    phone:{type: string, match: /^[0-9]{10}$/},
    joiningDate:{type:Date, required:true},
    previousCompany:{type:String}
     
})
module.exports=mongoose.model("User",schema)