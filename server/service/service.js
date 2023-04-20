const repository = require("../repository/repository");

const newUser = async (req) => {
  const result = repository.createUser(req);
  if (result?.errors) throw new Error(result?.errors);
  return result;
};

const updateUser = async (body) => {
  if (!body.userId) throw new Error(`user id is ${body.userId}`);
  const result = repository.updateUserData(body);
  if (result?.errors) throw new Error(result?.errors);
  return result;
};

const deleteUser = async (userId) => {
  if (!userId) throw new Error(`user id is ${userId}`);
  return repository.deleteUserData(userId);
};

const getUser = async (userId) => {
  if (!userId) throw new Error(`user id is ${userId}`);
  const result = await repository.getUserData(userId);
  if (!result.length) throw new Error(`No result found for user id ${userId}`);
  return result;
};

const getAllUser = async () => {
  return repository.getAllUserData();
};

module.exports = { newUser, updateUser, deleteUser, getUser, getAllUser };
