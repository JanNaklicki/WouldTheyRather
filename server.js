const SerialPort = require('serialport')
const express = require('express');



const app = express()
const http = require('http').Server(app);
const io = require('socket.io')(http);
const Readline = SerialPort.parsers.Readline
const serialport = new SerialPort('COM5')
const parser = new Readline();


app.use(express.static('public'))
app.set('view engine', 'ejs');

serialport.pipe(parser);


// app.get('/test', function(req, res) {
//     res.render('test', {

//     });
// })

parser.on('data', function(data) {

    io.emit('serialD', data);
    console.log(data);
});
console.log('works!');



app.get('/', function(req, res) {
    res.render('index', {});
});




// app.post('/serial', async(req, res) => {})





io.on('connection', (socket) => {
    console.log('a user connected');



    socket.on('test', () => {
        console.log('dupa');
    })

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

});






http.listen(3000, () => {
    console.log('listening on *:3000');
});