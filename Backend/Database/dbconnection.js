import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "RESERVATIONS", // ✅ DB name explicitly set
    });

    console.log("✅ Connected to MongoDB database successfully");
  } catch (error) {
    console.error("❌ Error while connecting to MongoDB:");
    console.error(error.message);
    process.exit(1); // ✅ Stop the server if DB connection fails
  }
};
