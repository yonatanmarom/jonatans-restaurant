var el01 = document.querySelector('.cube1')
if (el01) {
    el01.innerHTML = `<h1> menu </h1>`
    el01.innerHTML += `<button class ="ddd" onClick="inputNumber()">pizza 40₪</button>`
    el01.innerHTML += `<button class ="ddd" onClick="inputNumber()">hamburger 50₪</button>`
    el01.innerHTML += `<button class ="ddd" onClick="inputNumber()">sushi 35₪</button>`
    el01.innerHTML += `<button class ="ddd" onClick="inputNumber()">chicken 70₪</button>`
    el01.innerHTML += `<button class ="ddd" onClick="inputNumber()">Eggs ₪20</button>`
    el01.innerHTML += `<button class ="ddd" onClick="inputNumber()">milk ₪20</button>`
}


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