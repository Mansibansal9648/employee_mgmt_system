const express = require("express");
const router = require("./controller/controller");
const port = 4000;
const app = express();
app.use("/users", router);
app.listen(port, () => console.log(`server is running on port ${port}`));
