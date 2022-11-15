const newUser = async (req, res) => {
  const data = "hitting the new user route";
  return data;
};
const updateUser = async (req, res) => {
  const data = "hitting the update user route";
  return data;
};

const deleteUser = async (req, res) => {
  const data = "hitting the delete user route";
  return data;
};

const getUser = async (req, res) => {
  const data = "hitting the get user route";
  return data;
};

const getAllUser = async (req, res) => {
  const data = "hitting the get all user route";
  return data;
};
module.exports = { newUser, updateUser, deleteUser, getUser, getAllUser };
