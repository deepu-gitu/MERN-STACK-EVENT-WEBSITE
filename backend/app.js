import express from "express";
import cors from "cors";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/messsageRouter.js";

// Initialize dotenv to read .env file
dotenv.config({ path: "./config/config.env" });

const app = express(); // Initialize app here
const PORT = process.env.PORT || 4000; // Default to 4000 if not set

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/message", messageRouter);

dbConnection();

export default app;
