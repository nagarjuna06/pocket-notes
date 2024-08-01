import mongoose from "mongoose";
import settings from "../config.js";

const connectDB = async () => {
  try {
    await mongoose.connect(settings.mongo_uri);
    console.log("DB connected!");
  } catch (error) {
    process.exit(1);
  }
};

export default connectDB;
