const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('click', (msg) => {
        console.log('clicked, ' + msg);
    });
});

http.listen(8080, () => {
    console.log('Listening on port 8080');
});