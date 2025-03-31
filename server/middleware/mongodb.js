import connectDB from "../db";

export default defineEventHandler(async () => {
  await connectDB();
});
