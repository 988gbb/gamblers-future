import mongoose from "mongoose";

let isConnected = false; // Track the connection status

const connectDB = async () => {
  if (isConnected) {
    console.log("Using existing MongoDB connection");
    return;
  }

  const mongoUri = process.env.MONGO_URI;

  // Log the MONGO_URI to verify it's being loaded
  console.log("MONGO_URI:", mongoUri);

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
