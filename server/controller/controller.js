const express = require("express");
const router = express();
const service = require("../service/service");

router.post("/newUser", async (req, res) => {
  try {
    const { body } = req;
    const result = await service.newUser(body);
    return res.status(200).send(result);
  } catch (e) {
    const { message } = e;
    return res.status(400).send({ error: message ?? "some error occurred" });
  }
});

router.post("/updateData", async (req, res) => {
  try {
    const { body } = req;
    const result = await service.updateUser(body);
    return res.status(200).send(result);
  } catch (e) {
    const { message } = e;
    return res.status(400).send({ error: message ?? "some error occurred" });
  }
});

router.post("/userData", async (req, res) => {
  try {
    const { userId } = req.body;
    const result = await service.getUser(userId);
    return res.status(200).send(result);
  } catch (e) {
    const { message } = e;
    return res.status(400).send({ error: message ?? "some error occurred" });
  }
});

router.get("/getAll", async (req, res) => {
  try {
    const result = await service.getAllUser();
    return res.status(200).send(result);
  } catch (e) {
    return res.status(400).send({ error: message ?? "some error occurred" });
  }
});

router.post("/deleteUser", async (req, res) => {
  try {
    const { userId } = req.body;
    const result = await service.deleteUser(userId);
    return res.status(200).send(result);
  } catch (e) {
    const { message } = e;
    return res.status(400).send({ error: message ?? "some error occurred" });
  }
});

module.exports = router;
