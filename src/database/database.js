import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Successful connection to MongoDB Atlas");
  } catch (error) {
    console.error("Error in MongoDB connection:", error);
  }
};

export default connectToDatabase;
