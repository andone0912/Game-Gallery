
const passive11 = document.querySelector('#passive-1')
const counterMoney = document.querySelector('.money')
document.getElementById('click').onclick = function () {
    addNumber()
}

const counterMoneySec = document.querySelector('.money-sec')
let money = 0
function addNumber() {
    money += 1
    counterMoney.innerHTML = money
}


document.getElementById('passive-1').onclick = function () {
    passive(30, 1, 1)
}

document.getElementById('passive-2').onclick = function () {
    passive(60, 2, 2)
}

document.getElementById('passive-3').onclick = function () {
    passive(120, 4, 3)
}

document.getElementById('passive-4').onclick = function () {
    passive(240, 8, 4)
}

document.getElementById('passive-5').onclick = function () {
    passive(400, 16, 5)
}

document.getElementById('passive-6').onclick = function () {
    passive(800, 32, 6)
}

document.getElementById('passive-7').onclick = function () {
    passive(2000, 64, 7)
}

document.getElementById('passive-8').onclick = function () {
    passive(4000, 128, 8)
}

document.getElementById('passive-9').onclick = function () {
    passive(8000, 256, 9)
}

document.getElementById('passive-10').onclick = function () {
    passive(16000, 512, 10)
}


function passive(price, levels, num) {

    if (!document.getElementById(`passive-${num}`).classList.contains('obtained')) {
        if (money > price) {
            document.getElementById(`passive-${num}`).classList.add('bg-blue-600', 'obtained')
            money -= price
            counterMoney.innerHTML = money
            setInterval(passiveAdd, 1000)
            document.getElementById(`passive-${num}`).innerHTML = `obtained(+${levels}/sec)`
            counterMoneySec.innerHTML = Number(counterMoneySec.innerHTML) + levels
        }
    }

    function passiveAdd() {
        money += levels
        counterMoney.innerHTML = money
    }
}


let started, resetTimeoutHandle, resetTimeout = 1000,
    counterClicksSec = document.querySelector('.click-sec'),
    zone = document.querySelector('.click-button'),
    clicks = 0;

zone.onseclect = zone.onselectstart = function () {
    return false;
};

function clicksPerSecond(started, clicks) {
    return clicks / ((new Date()) - started) * 1000;
}

function count() {
    clearTimeout(resetTimeoutHandle);
    clicks++;
    counterClicksSec.innerText = clicksPerSecond(started, clicks).toFixed(1);
    resetTimeoutHandle = setTimeout(reset, resetTimeout);
    return false;
}

function start() {
    started = new Date();
    clicks = 0;
    counterClicksSec.style.opacity = 1;
    this.onmousedown = count;
    this.onmousedown();
    return false;
}

function reset() {
    zone.onmousedown = start;
    counterClicksSec.style.opacity = 0.3;
}

reset();