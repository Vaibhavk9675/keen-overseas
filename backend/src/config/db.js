import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");
    console.log("URI length:", process.env.MONGO_URI?.length);

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");
  } catch (error) {
    console.log("DB ERROR:", error.message);
    process.exit(1);
  }
};

export default connectDB;