const repository = require("../repository/repository");

const newUser = async (req) => {
  return repository.createUser(req);
};

const updateUser = async (body) => {
  if (!body.userId) throw new Error(`user id is ${body.userId}`);
  return repository.updateUserData(body);
};

const deleteUser = async (userId) => {
  if (userId) throw new Error(`user id is ${userId}`);
  return repository.deleteUserData(userId);
};

const getUser = async (userId) => {
  if (userId) throw new Error(`user id is ${userId}`);
  return repository.getUserData(userId);
};

const getAllUser = async () => {
  return repository.getAllUserData();
};

module.exports = { newUser, updateUser, deleteUser, getUser, getAllUser };
