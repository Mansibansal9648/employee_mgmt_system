const repository = require("../repository/repository");
const newUser = async (req) => {
  return repository.createUser(req);
};
const updateUser = async (body) => {
  return repository.updateUserData(body);
};

const deleteUser = async (userId) => {
  return repository.deleteUserData(userId);
};

const getUser = async (userId) => {
  return repository.getUserData(userId);
};

const getAllUser = async () => {
  return repository.getAllUserData();
};
module.exports = { newUser, updateUser, deleteUser, getUser, getAllUser };
