const express = require("express");
const router = express();
const service = require("../service/service");
// const createUser=async(req,res)=>{
//   const data=await service.newUser();
//     return res.status(200).send(data);
// }
// router.post('/newUser',createUser)
router.post("/newUser", async (req, res) => {
  const data = await service.newUser();
  return res.status(200).send(data);
});
router.post("/userData", async (req, res) => {
  const data = await service.updateUser();
  return res.status(200).send(data);
});
router.get("/userData", async (req, res) => {
  const data = await service.getUser();
  return res.status(200).send(data);
});
router.get("/getAll", async (req, res) => {
  const data = await service.getAllUser();
  return res.status(200).send(data);
});
router.delete("/userId", async (req, res) => {
  const data = await service.deleteUser();
  return res.status(200).send(data);
});

module.exports = router;
