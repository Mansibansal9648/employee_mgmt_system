const mongoose = require("mongoose");
console.log(process.env.DB_URL)
const url =process.env.DB_URL
 // "mongodb+srv://MonaDev:Mona123@cluster0.01rixba.mongodb.net/employee_mgmt_system?retryWrites=true&w=majority";
const database = async () => {
  try {
    console.log(typeof(process.env.DB_URL))
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
module.exports = { database, url };
