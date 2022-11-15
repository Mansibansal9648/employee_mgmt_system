const express = require("express");
const router = require("./controller/controller");
const db=require('./db/db')
const port = 4000;
const app = express();
app.use("/users", router);
db.database();
app.listen(port, () => console.log(`Server is running on port ${port}`));
