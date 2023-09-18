const express = require('express');
const cors = require('cors');

const http = require('http');
const {
    Server
} = require('socket.io');

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
    },
});

io.on('connection', (socket) => {
    socket.on('join_room', (data) => {
        socket.join(data);
    });

    socket.on('message', (data) => {
        socket.to(data.room).emit('receive_message', data);
    });
});

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});