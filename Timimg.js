                                //  TIMING EVENT
let intervalId;

function getCurrentTime(){
    document.getElementById("timer").innerHTML = new Date;
}
getCurrentTime();

function start(){
intervalId =setInterval(getCurrentTime,1000)
}

function stop(){
    clearInterval(intervalId)
}

function startTime(ControlId){
var seconds = document.getElementById(ControlId).value;
seconds = seconds - 1;

if(seconds == 0){
    seconds = "Done";
    return;
}
else{
    seconds = seconds
}
myIntervalId =setTimeout(function(){startTime("num")}, 1000);
}
function stopTimer(){
    clearTimeout(myIntervalId);
}

