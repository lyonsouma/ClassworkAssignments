                                //  TIMING EVENT
// let intervalId;

// function getCurrentTime(){
//     document.getElementById("timer").innerHTML = new Date;
// }
// getCurrentTime();

// function start(){
// intervalId =setInterval(getCurrentTime,1000)
// }

// function stop(){
//     clearInterval(intervalId)
// }

var myIntervalId;

function startTime(ControlId){
var getParameter = document.getElementById(ControlId);
var seconds = getParameter.value;

seconds = seconds - 1;

if(seconds == 0){
    getParameter.value = "Done";
    return;
}
else{
    getParameter.value = seconds;
}
myIntervalId =setTimeout(function(){startTime("num")}, 1000);
}

function stopTime(){
    clearTimeout(myIntervalId);
}

