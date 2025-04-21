import express from 'express';

import {createServer} from 'node:http';

import {Server} from "socket.io";

import mongoose from 'mongoose'; 

import cors from 'cors';

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

app.get('/home', (req, res) => {
    res.send('Hello World!');
});

const start =async () =>{

    app.listen(8000,()=>{
        console.log('Server is running on port 8000');
    });
}

start();