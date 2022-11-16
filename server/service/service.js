const repository=require('../repository/repository')
const newUser = async (req) => {
  //const data = "hitting the new user route";
  //return data;
  return repository.createUser(req)
};
const updateUser = async (req, res) => {
  const data = "hitting the update user route";
  return data;
};

const deleteUser = async (req, res) => {
  const data = "hitting the delete user route";
  return data;
};

const getUser = async (userId) => {
//  const data = "hitting the get user route";
  //return data;
  return repository.getUserData(userId);
};

const getAllUser = async (req, res) => {
  const data = "hitting the get all user route";
  return data;
};
module.exports = { newUser, updateUser, deleteUser, getUser, getAllUser };
