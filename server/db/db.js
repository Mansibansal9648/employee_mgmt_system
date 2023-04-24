const mongoose = require("mongoose");

const database = async () => {
  const url = process.env.DB_URL;
  try {
    mongoose.connect(
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
module.exports = { database };
