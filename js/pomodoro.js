var workTime = 1500;
var breakTime = 300;

$(".start").click(countdown);
$(".stop").click(stopCountdown);
$(".submit").click(setCountdown);

function countdown(){
    var setInterval(function(){
        var workTime = (workTime - 1);
        
    }, 1000)
    
}

function stopCountdown(){
    
}

function setCountdown(workTime, breakTime){
    $(".workClock").textContent(workTime);
    $(".breakClock").textContent(breakTime);
}

// useless bullshit below this line

var x = setInterval(function() {
    var workTime = (workTime - 1);
    update display
}