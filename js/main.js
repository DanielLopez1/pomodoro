let time = 25 * 60;
let timer = null;
let currentTime = null;
let task = [];
const minutes = parseInt(time / 60);
const seconds = parseInt(time % 60);

let myBtnStart = document.getElementById('start');
let myBtnPause = document.getElementById('pause');
let myDivTaks = document.getElementById('to-do-tasks');
let idTask = document.getElementById("idTask");
let formModal = document.querySelector("#form");
let mybtnSave = document.getElementById('save');

let timerString = document.getElementById('timerString');
    timerString.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;




myBtnStart.addEventListener('click', start);
myBtnPause.addEventListener('click', pause);
// myDivTaks.addEventListener('click', clickDivTask);
formModal.addEventListener('submit', e => {
    e.preventDefault();
    if (idTask.value != ""){
        createTasks(idTask.value);
        idTask.value = "";
        renderTask();
    }
});


function start(){
    clearInterval(timer);
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

// To-do de tasks


function createTasks(value){
    const newtask = {
        id: Math.round((Math.random() * 100)),
        title: value,
        completed: false
    };

    task.unshift(newtask);

}

function renderTask(){
    let html = task.map(task =>{
        return ` 
        <div class="task">
            <div class="completed">${task.completed ? `<span class="done"> Done </span>` : `<span class="progress"> In Progress... </span>`}</div>
            <div class="title">${task.title}</div>
            <div><button class="btn-taskModal" >
                <img src="./img/threedots-white.png" alt="imagen de tres puntos" >
            </button></div>
        </div>
        
        `;
    });

    let taskContainer = document.querySelector("#CONTASK");
    taskContainer.innerHTML = html.join("");
    // myDivTaks.innerHTML = html.join(" ");
}
