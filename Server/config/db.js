const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const db = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));
};

module.exports = db;

