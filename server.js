require('./loaders/mongoose')
const express = require('express');
const app = express()
const http = require('http').Server(app);
const io = require('socket.io')(http);
const questRouter = require('./routes/questions')
var bodyParser = require('body-parser')

var jsonParser = bodyParser.json()
    //MODELS

const Question = require('./models/Question')


//APP

app.use(express.static('public'))
app.use('/questions', questRouter)
app.use(bodyParser.json())
app.set('view engine', 'ejs');



// SERIAL PORT
const serialport = require('./loaders/serialPort').serialport
const parser = require('./loaders/serialPort').parser
serialport.pipe(parser);



parser.on('data', function(data) {
    io.emit('serialD', data);
});





// ROUTES


app.get('/', function(req, res) {

    res.render('index')
})

app.get('/duel', function(req, res) {
    res.render('duel');
});



// SOCKET 

io.on('connection', (socket) => {
    console.log('a user connected');



    socket.on('test', () => {
        console.log('dupa');

    })

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

});


//CONNECT
http.listen(3000, () => {
    console.log('listening on *:3000');
});