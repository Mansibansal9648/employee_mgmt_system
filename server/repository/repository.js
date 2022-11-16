//const db=require('../db/db')
const { ObjectId } = require("mongodb");
const User = require("../db/schema");
//const User  = db.User;

const createUser=async(req)=>{
    try{
       // console.log(req)
    const user=new User(req)
  //  const newUser=await User.insert(req)
    const newUser= await user.save();
    return(newUser)
    }catch(e){
        return e
    }
}
const getUserData = async (userId) => {
  try {
    //console.log(User);
    const newUser = await User.findOne({
      _id: ObjectId(userId),
    });
  //  console.log(newUser);
    return newUser;
  } catch (e) {
    return e;
  }
};

module.exports = { getUserData,createUser };
