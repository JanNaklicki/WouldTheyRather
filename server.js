// load the things we need

const SerialPort = require('serialport')
var express = require('express');
var request = require('request')

const socketio = require('socket.io')
var http = require('http')
var app = express();
const Readline = SerialPort.parsers.Readline



// set the view engine to ejs
app.set('view engine', 'ejs');

const serialport = new SerialPort('COM3')




// use res.render to load up an ejs view file
app.use(express.static('public'))



// index page 
app.get('/', function(req, res) {
    var mascots = [
        { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
        { name: 'Tux', organization: "Linux", birth_year: 1996},
        { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
    ];
    var tagline = "No programming concept is complete without a cute animal mascot.";

    res.render('index', {
        mascots: mascots,
        tagline: tagline
    });
});

app.post('/serial',function(req,res){
    const parser = new Readline();
    serialport.pipe(parser);
    parser.on('data',function(data){

        console.log(data)
        



       
    });
    console.log('works!');
    
    res.status(200).end();
})
// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

const server = app.listen(process.env.PORT || 3000, () => {
    console.log("server is running")
})

 const io = socketio(server)


io.on('connection', (socket) => {
    console.log("New user connected")
})




