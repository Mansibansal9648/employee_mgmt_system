const express = require("express");
const router = express();
const service = require("../service/service");
// const createUser=async(req,res)=>{
//   const data=await service.newUser();
//     return res.status(200).send(data);
// }
// router.post('/newUser',createUser)
router.post("/newUser", async (req, res) => {
  try {
    const body = req.body;
    const result = await service.newUser(body);
    return res.status(200).send(result);
  } catch (e) {
    return res.status(400).send({ error: e });
  }
});
router.post("/updateData", async (req, res) => {
  try {
    //console.log(req.body);
    //const { userId } = req.body;
    //console.log(userId);
    const data = req.body;
    const result = await service.updateUser(data);
    return res.status(200).send(result);
  } catch (e) {
    return res.status(400).send({ error: e });
  }
});
router.post("/userData", async (req, res) => {
  try {
    // console.log(req)
    const { userId } = req.body;
    // const userId='6374b4f0a68ab1c3425edd2c';
    // console.log(userId)
    const data = await service.getUser(userId);
    console.log(data);
    return res.status(200).send(data);
  } catch (e) {
    return res.status(400).send({ error: e });
  }
});
router.get("/getAll", async (req, res) => {
  try {
    const data = await service.getAllUser();
    return res.status(200).send(data);
  } catch (e) {
    return res.status(400).send({ error: e });
  }
});
router.post("/deleteUser", async (req, res) => {
  try {
    const { userId } = req.body;
    console.log("delete",userId)
    const data = await service.deleteUser(userId);
    return res.status(200).send(data);
  } catch (e) {
    return res.status(400).send({ error: e });
  }
});

module.exports = router;
