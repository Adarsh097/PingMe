import mongoose from "mongoose";

export const connectDb = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MONGODB CONNECTED: ${conn.connection.host}`);
    } catch (error) {
        console.log(`MONGODB CONNECTION ERROR:`,error);
    }
}