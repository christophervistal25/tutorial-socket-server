const express = require('express');
const app = express();
const PORT = 3030;


let server = app.listen(PORT);

const io = require('socket.io')(server, {
    cors : {
        origin: '*',
    }
});

io.on('connection', (socket) => {
    console.log('Client Connected!');

    socket.on('SEND_MESSAGE_FROM_WEB', (data) => {
        io.emit("FROM_WEB_EMIT", data);
    });

    socket.on("FROM_ANDROID_EMIT", (data) => {
        io.emit("SEND_MESSAGE_FROM_ANDROID", data);
    });

    socket.on('disconnect', () => {
        console.log('Client Disconnected!');
    });
});