import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import {connectToSocket} from "./controllers/socketManager.js";
dotenv.config({ path: '../.env' });

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", process.env.PORT || 8000);

app.get("/home", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

const start = async () => {
  const connectionDB =  await  mongoose.connect(process.env.MONGO_URL)
  console.log(`MonggoDB connected: ${connectionDB.connection.host}`);
    
  server.listen(app.get("port"), () => {
    console.log(`Server is running on port ${app.get("port")}`);
  });
};

start();
