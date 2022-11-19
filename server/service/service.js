const repository = require("../repository/repository");
const newUser = async (req) => {
  //const data = "hitting the new user route";
  //return data;
  return repository.createUser(req);
};
const updateUser = async (body) => {
  // const data = "hitting the update user route";
  // return data;
  return repository.updateUserData(body);
};

const deleteUser = async (userId) => {
  //const data = "hitting the delete user route";
  //return data;
  return repository.deleteUserData(userId);
};

const getUser = async (userId) => {
  //  const data = "hitting the get user route";
  //return data;
  return repository.getUserData(userId);
};

const getAllUser = async () => {
  // const data = "hitting the get all user route";
  //return data;
  return repository.getAllUserData();
};
module.exports = { newUser, updateUser, deleteUser, getUser, getAllUser };
