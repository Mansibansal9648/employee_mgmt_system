const { ObjectId } = require("mongodb");
const User = require("../db/schema");

const createUser = async (body) => {
  try {
    const user = new User(body);
    const newUser = await user.save();
    return newUser;
  } catch (e) {
    return { errors: e.message };
  }
};

const getUserData = async (userId) => {
  try {
    const newUser = await User.find({
      _id: ObjectId(userId),
    });
    return newUser;
  } catch (e) {
    console.log(e);
    return { errors: e.message };
  }
};

const updateUserData = async (body) => {
  try {
    const { userId } = body;
    const updateUser = await User.updateOne(
      {
        _id: ObjectId(userId),
      },
      body
    );
    return updateUser;
  } catch (e) {
    return { errors: e.message };
  }
};

const deleteUserData = async (userId) => {
  try {
    const deleteUser = await User.deleteOne({
      _id: ObjectId(userId),
    });
    return deleteUser;
  } catch (e) {
    return { errors: e.message };
  }
};

const getAllUserData = async () => {
  try {
    const getAllUser = await User.find();
    return getAllUser;
  } catch (e) {
    return { errors: e.message };
  }
};

module.exports = {
  getUserData,
  createUser,
  updateUserData,
  deleteUserData,
  getAllUserData,
};
