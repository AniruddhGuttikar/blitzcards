import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const MONGO_URI = process.env.MONGO_URI;
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI as string);
    console.log("successfully connected to the database");
  } catch (err) {
    console.log("failed to connect to the database: ", err);
  }
};

export default connectDB;
