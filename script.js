const numberHours = document.querySelector('.number-hours');
const barSeconds = document.querySelector('.bar-seconds');


const numberElement = [];
const barElement = [];

for(let i=1;i<=12;i++){
   numberElement.push(
    `<span style="--index:${i};"><p>${i}</p></span>`
   );
}
numberHours.insertAdjacentHTML("afterbegin", numberElement.join(""));

// console.log(numberElement);
for(let i=1;i<=60;i++){
    barElement.push(
        `<span style="--index:${i};"><p></p></span>`
       );
}

barSeconds.insertAdjacentHTML("afterbegin", barElement.join(""));

const handHours = document.querySelector('.hands.hours');
const handMinutes = document.querySelector('.hands.minutes');
const handSeconds = document.querySelector('.hands.seconds');

function getCurreentTime(){
    let date = new Date();
    let currentHours = date.getHours();
    let currentMinutes = date.getMinutes();
    let currentSeconds = date.getSeconds();

    handHours.style.transform = `rotate(${currentHours * 30 + currentMinutes / 2}deg)`;
    handMinutes.style.transform = `rotate(${currentMinutes * 6}deg)`;
    handSeconds.style.transform = `rotate(${currentSeconds * 6}deg)`;
}
getCurreentTime();
setInterval(getCurreentTime, 1000);
