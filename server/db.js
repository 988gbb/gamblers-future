import mongoose from "mongoose";
import { useRuntimeConfig } from "#imports";

let isConnected = false; // Track the connection status

const connectDB = async () => {
  if (isConnected) {
    console.log("Using existing MongoDB connection");
    return;
  }

  const config = useRuntimeConfig();
  const mongoUri = config.MONGO_URI;

  if (!mongoUri) {
    throw new Error("MONGO_URI is not defined in the environment variables.");
  }

  try {
    const conn = await mongoose.connect(mongoUri);
    isConnected = true; // Set the connection status to true
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
