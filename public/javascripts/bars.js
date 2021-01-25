// const randomWidth = Math.floor((Math.random() * 65) + 10);
// let a = `${100-randomWidth}%`;
// console.log(randomWidth);
// console.log(a);

// bars[0].style.height = `${randomWidth}%`;
// bars[1].style.height = a;

// progress[0].addEventListener('mouseover', () => {
//     const randomTiming = Math.floor((Math.random() * 2) + 2);

//     bars[0].style.transitionDuration = `${randomTiming}s`;
//     bars[1].style.transitionDuration = `${randomTiming}s`;
//     bars[0].style.height = '100%';
//     bars[1].style.height = '100%';

// });









// bars.forEach((bar, index) => {
//     const randomWidth = Math.floor((Math.random() * 65) + 10);
//     bar.style.height = `${randomWidth}%`;


// })













function mapValue(val, in_min, in_max, out_min, out_max) {
    return (val - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function float2int(value) {
    return value | 0;
}

var socket = io();

var serData = document.getElementById('serD');
var playerOne = document.getElementById('p1Pick')
var playerTwo = document.getElementById('p2Pick')


socket.on('serialD', function(msg) {
    console.log("dupa");
    var a = String(msg);
    var c = a.split(':');
    var one = c[0];
    var two = c[1];
    oneMapped = mapValue(one, 0, 1023, 0, 100);
    twoMapped = mapValue(two, 0, 1023, 0, 100);
    oneMapped = float2int(oneMapped)
    twoMapped = float2int(twoMapped)

    // playerTwo.textContent = oneMapped;
    // playerOne.textContent = twoMapped;
    serData.textContent = msg;
    console.log(msg);

});