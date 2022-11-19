//const db=require('../db/db')
const { ObjectId } = require("mongodb");
const User = require("../db/schema");
//const User  = db.User;

const createUser = async (req) => {
  try {
    // console.log(req)
    const user = new User(req);
    //  const newUser=await User.insert(req)
    const newUser = await user.save();
    return newUser;
  } catch (e) {
    return e;
  }
};
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

const updateUserData = async (body) => {
  try {
    console.log(body);
    const { userId } = body;
    console.log(userId);
    //  body.userId=null;
    const updateUser = await User.updateOne(
      {
        _id: ObjectId(userId),
      },
      body
    );

    //   const updateUser=await User.findAndModify({
    //     query:{_id : ObjectId(userId)},
    //  update: {body},new:true

    //   })    .
    console.log(updateUser);
    return updateUser;
  } catch (e) {
    return e;
  }
};
const deleteUserData = async (userId) => {
  try {
    console.log(userId);
    const deleteUser = await User.findByIdAndDelete({
      _id: ObjectId(userId),
    });
    return deleteUser;
  } catch (e) {
    return e;
  }
};
const getAllUserData = async () => {
  try {
    const getAllUser = await User.find();
    return getAllUser;
  } catch (e) {
    return e;
  }
};
module.exports = {
  getUserData,
  createUser,
  updateUserData,
  deleteUserData,
  getAllUserData,
};
