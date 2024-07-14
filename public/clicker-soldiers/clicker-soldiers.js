  const counterMoneySec = document.querySelector('.money-sec')
  let money = 0
function addNumber(){
  const counterMoney = document.querySelector('.money')
  money += 1
  counterMoney.innerHTML = money
}

let started, resetTimeoutHandle, resetTimeout = 1000,
    counterClicksSec = document.querySelector('.click-sec'),
    zone = document.querySelector('.click-button'),
    clicks = 0;

zone.onseclect = zone.onselectstart = function() {
    return false;
};

function clicksPerSecond(started, clicks) {
    return clicks / ((new Date()) - started) * 1000;
}

function count() {
    clearTimeout(resetTimeoutHandle);
    clicks++;
    counterMoneySec.innerHTML = clicksPerSecond(started, clicks).toFixed(2);
    counterClicksSec.innerText = clicksPerSecond(started, clicks).toFixed(2);
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