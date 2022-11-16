const mongoose = require("mongoose");
const url =
  "mongodb+srv://MonaDev:Mona123@cluster0.01rixba.mongodb.net/employee_mgmt_system?retryWrites=true&w=majority";
const database = async () => {
  try {
    await mongoose.connect(
      url,
      // {
      //  useNewUrlParser:true,
      //  useCreateIndex:true,
      // useUnifiedTopology:true,
      // useFindAndModify:false},
      () => {
        console.log("Connected to database successfully");
      }
    );
  } catch (e) {
    console.log("Can not connect to database");
  }
};
module.exports = { database, url};
