var el01 = document.querySelector('.cube1')
if (el01) {
    el01.innerHTML = `<h1> menu </h1>`
    el01.innerHTML += `<div class ="ddd" onClick="inputNumber()">pizza 40₪</div>`
    el01.innerHTML += `<div class ="ddd" onClick="inputNumber()">hamburger 50₪</div>`
    el01.innerHTML += `<div class ="ddd" onClick="inputNumber()">sushi 35₪</div>`
    el01.innerHTML += `<div class ="ddd" onClick="inputNumber()">chicken 70₪</div>`
    el01.innerHTML += `<div class ="ddd" onClick="inputNumber()">Eggs ₪20</div>`
    el01.innerHTML += `<div class ="ddd" onClick="inputNumber()">milk ₪20</div>`
}


var el07 = document.querySelector('.cube10')
if (el07) el07.innerHTML = '<h1>welcome to v.i.p</h1>'

var el06 = document.querySelector('.cube9')
if (el06) el06.innerHTML = '<h1>kick ball launcher (The game is for phones)</h1>'

var el02 = document.querySelector('.cube4')
if (el02) el02.innerHTML = '<h1>picture of dishes served in the restaurant</h1>'

var el02 = document.querySelector('.cube2')
if (el02) el02.innerHTML = '<h1>Pictures of the restaurant</h1>'

var el03 = document.querySelector('.cube3')
if (el03) el03.innerHTML = '<h1>Other sites</h1>'

var el04 = document.querySelector('.cube5')
if (el04) el04.innerHTML = '<h1>Comments</h1>'

var el05 = document.querySelector('.cube7')
if (el05) el05.innerHTML = '<h1>krunker launcher</h1>'

function inputNumber2() {
    var a = prompt('enter the code');
    if (a === '102030') {
        window.open('vip', '_blank');
    } else {
        console.log('Wrong number');
    }



}


function popup() {
    console.log('hey');
}
console.log('please do not touch !')

function inputNumber() {
    var a = prompt('entering a credit card number');
    var a = prompt('enter yor address');
    var a = prompt('what would you like in the dish');
}