// load the things we need

const SerialPort = require('serialport')

const express = require('express');

const app = express()
const http = require('http').Server(app);
const io = require('socket.io')(http);






app.use(express.static('public'))





const Readline = SerialPort.parsers.Readline

app.post('/', function (req, res) {
    res.send('POST request to the homepage')
  })

// set the view engine to ejs
app.set('view engine', 'ejs');

const serialport = new SerialPort('COM6')




// use res.render to load up an ejs view file




// index page 
app.get('/', function(req, res) {
    var mascots = [
        { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
        { name: 'Tux', organization: "Linux", birth_year: 1996},
        { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
    ];


    var tagline = "";

    res.render('index', {
        mascots: mascots,
        tagline: tagline
    });
});

app.post('/serial',function(req,res){
    const parser = new Readline();
    serialport.pipe(parser);
    parser.on('data',function(data){
        
        io.emit('serialD',data);

        
        
        
        console.log(data);





    });
    console.log('works!');
    
    
})



app.get('/about', function(req, res) {
    res.render('pages/about');
});


io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
    
});





http.listen(3000, () => {
    console.log('listening on *:3000');
});

