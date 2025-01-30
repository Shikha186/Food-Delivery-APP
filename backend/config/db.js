import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://prachig150904:prachig150904@cluster0.pmxiw.mongodb.net/Food-Zone"
    )
    .then(() => {
      console.log("Connected to MongoDB");
    });
};
