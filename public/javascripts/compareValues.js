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

        console.log(questionsDBres.questionOne);
        document.getElementById('par1').innerHTML = questionsDBres.questionOne;
        document.getElementById('par2').innerHTML = questionsDBres.questionTwo;
    })
}, 20000)