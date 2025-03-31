import connectDB from "../db";
import User from "../models/User";
import mongoose from "mongoose";

export default defineEventHandler(async (event) => {
  const mongoUri = process.env.MONGO_URI; // Ensure the URI is set in environment variables
  const conn = await mongoose.connect(mongoUri, {
    bufferCommands: false,
    maxPoolSize: 10, // Adjust based on your workload
  });

  const body = await readBody(event);

  // Create a new user
  const user = new User({
    username: body.username,
    email: body.email,
    password: body.password, // Hash the password in production
  });

  try {
    const savedUser = await user.save();
    return { success: true, user: savedUser };
  } catch (error) {
    return { success: false, error: error.message };
  }
});
