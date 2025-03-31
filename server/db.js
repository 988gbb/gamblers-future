import mongoose from "mongoose";
import { useRuntimeConfig } from "#imports";

const connectDB = async () => {
  const config = useRuntimeConfig();
  const mongoUri = config.MONGO_URI;

  if (!mongoUri) {
    throw new Error("MONGO_URI is not defined in the environment variables.");
  }

  try {
    const conn = await mongoose.connect(mongoUri); // No options needed for modern drivers
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
