import express from "express";
import dotenv from 'dotenv'
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

import { connectDb } from "./lib/db.js";
import cookieParser from "cookie-parser";


const app = express();

dotenv.config();

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5001;


app.use("/api/auth",authRoutes);
app.use("api,message",messageRoutes);

app.listen(PORT,()=>{
    console.log(`server is running on port: ${PORT}`);
    connectDb();
});