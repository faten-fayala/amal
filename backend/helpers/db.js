require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false });

    console.log("MongoDB connection SUCCESS");

  } catch (error) 
  {
    console.error("MongoDB2 connection FAIL");
    process.exit(1);
  }
};

module.exports = connectDB;
