// PAGE UNDER CONSTRUCTION COUNTER JAVA SCRIPT

var countDownDate = new Date("Jan 11, 2023 14:00:00").getTime();

var x = setInterval(function() {

var now = new Date().getTime();
    
var distance = countDownDate - now;
    
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
document.getElementById("days").innerHTML = days;

document.getElementById("hr").innerHTML = hours;

document.getElementById("min").innerHTML = minutes;

document.getElementById("sec").innerHTML = seconds;

// If the count down is over, write some text 
if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "ALMOST DONE !!";
}
}, 1000);
