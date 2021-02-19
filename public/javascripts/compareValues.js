var questionsDBres = ""
var i = 0;

window.setInterval(() => {
    i = i + 1;
    url = 'http://127.0.0.1:3000/questions/' + i;
    fetch(url, {
        method: 'GET'
    }).then(response => response.json()).then(function(data) {
        questionsDBres = data;

    }).then(function() {


        document.getElementById('par1').innerHTML = questionsDBres.questionOne;
        document.getElementById('par2').innerHTML = questionsDBres.questionTwo;
    })
}, 20000)

var test = document.getElementById('tes');

function logging() {

    console.log('gracz 1')
    console.log(Math.abs(questionsDBres.valueOne - oneMapped))
    console.log('gracz 2')
    console.log(Math.abs(questionsDBres.valueOne - twoMapped))
    if (Math.abs(oneMapped - questionsDBres.valueOne) < Math.abs(twoMapped - questionsDBres.valueOne)) {

        console.log(Math.abs(oneMapped - questionsDBres.valueOne));
        socket.emit('tazePlayerOne', "20");

    } else {
        // console.log(Math.abs(c[4] - questionsDBres.valueOne));
        socket.emit('tazePlayerTwo');
    }
    console.log(questionsDBres.valueOne)
}