var questionsDBres = ""
var i = 0;
var butonNext = document.getElementById('next');
var submitNext = document.getElementById('submit');

function nextQuestion() {
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
}



function logging() {

    if (Math.abs(oneMapped - questionsDBres.valueOne) < Math.abs(twoMapped - questionsDBres.valueOne)) {


        socket.emit('tazePlayerOne', "20");
        document.getElementById("demo").innerHTML = "PLAYER ONE TAZED!";

    } else {
        // console.log(Math.abs(c[4] - questionsDBres.valueOne));
        socket.emit('tazePlayerTwo', "20");
        document.getElementById("demo").innerHTML = "PLAYER TWO TAZED!";

    }
    bars[2].style.height = `${questionsDBres.valueOne}%`

    bars[3].style.height = `${questionsDBres.valueTwo}%`

}

butonNext.addEventListener("click", nextQuestion())












var test = document.getElementById('tes');