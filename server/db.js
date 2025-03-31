import mongoose from "mongoose";

let cachedDb = null; // Cache the database connection

const connectDB = async () => {
  if (cachedDb) {
    console.log("Using cached MongoDB connection");
    return cachedDb;
  }

  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    throw new Error("MONGO_URI is not defined in the environment variables.");
  }

  try {
    const conn = await mongoose.connect(mongoUri, {
      bufferCommands: false, // Disable mongoose buffering for serverless
    });
    cachedDb = conn; // Cache the connection
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    throw error;
  }
};

export default connectDB;
