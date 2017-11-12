var library = library || {};

library.timer = (function () {

    var mil = document.getElementById('milli');
    var sec = document.getElementById('sec');
    var min = document.getElementById('min');
    var startTime;
    var set;
    //var paused = false;
    var pausedTime = 0;
    function timer() {
        var currentTime = new Date();
        var currMill = (currentTime - startTime);
        currMill += pausedTime;
        var currentSec = Math.floor(currMill / 1000);
        var currentMin = Math.floor(currentSec / 60);
        mil.innerHTML = (currMill / 100) % 100;
        sec.innerHTML = currentSec;
        min.innerHTML = currentMin;


    }
    document.getElementById('timerButton').addEventListener('click', function () {
        startTime = new Date();

        set = setInterval(function () {
            timer();

        }, 100);
    });
    document.getElementById('timerStopButton').addEventListener('click', function () {
        clearInterval(set);
        pausedTime = (new Date() - startTime) + pausedTime;
    });
    document.getElementById('timerResetButton').addEventListener('click', function () {
        pausedTime = 0;
        mil.innerHTML = 0;
        sec.innerHTML = 0;
        min.innerHTML = 0;
    });
}());