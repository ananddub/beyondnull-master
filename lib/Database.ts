import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI as string);
        console.log("MongoDB connected", db.connection.readyState); // Shows the connection status
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
    }
};

export default connectDB;
