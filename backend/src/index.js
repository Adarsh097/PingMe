import express from "express";
import dotenv from 'dotenv'
import authRoutes from "./routes/auth.route.js";
import { connectDb } from "./lib/db.js";

const app = express();

dotenv.config();

app.use(express.json());

const PORT = process.env.PORT || 5001;


app.use("/api/auth",authRoutes);

app.listen(PORT,()=>{
    console.log(`server is running on port: ${PORT}`);
    connectDb();
});