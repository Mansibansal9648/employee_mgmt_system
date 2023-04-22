const mongoose = require("mongoose");
const url =
  "mongodb+srv://MonaDev:Mona123@cluster0.01rixba.mongodb.net/employee_mgmt_system?retryWrites=true&w=majority";
// "mongodb://localhost:27017/employee_data";
const database = async () => {
  mongoose.connect(url, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  });

  // By using event driven model
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected successfully");
  });
};
module.exports = { database, url };
