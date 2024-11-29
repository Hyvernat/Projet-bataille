const express = require('express');
const dotenv = require('dotenv');
var cors = require('cors');
const http = require('http');
const socketIO =require('socket.io');

dotenv.config();

const app = express();

const httpServer = http.createServer(app);
const socketIO = socketIO(httpServer, {
    cors : {
        origin: '*',
    },
});
app.use(cors({ origin:true, credentials: true }));
app.use(express.json({extended: false }));
app.use('/api/users', userRoutes);