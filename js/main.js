let time = 25 * 60;
let timer = null;
let currentTime = null;
const minutes = parseInt(time / 60);
const seconds = parseInt(time % 60);

let myBtnStart = document.getElementById('start');
let myBtnPause = document.getElementById('pause');

let timerString = document.getElementById('timerString');
    timerString.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;




myBtnStart.addEventListener('click', start);
myBtnPause.addEventListener('click', pause);

function start(){
    timer = setInterval(() =>{
        timerHandler();
    }, 1000);

}
function pause(){
    clearInterval(timer)
}

function timerHandler(){
    time--;
    // alert(time);
    renderTime()
    if(time === 0){
        clearInterval(timer);
    }
    // renderTime();
}
function renderTime(){
    const minutes = parseInt(time / 60);
    const seconds = parseInt(time % 60);
    timerString.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

}

