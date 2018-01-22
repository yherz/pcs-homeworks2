(function () {
    "use strict";

    var canvas = document.getElementById("theCanvas"),
        context = canvas.getContext('2d');
    var x = 0;
    var y = 0;
    var e = window.event;

    function resizeCanvas() {
        canvas.width = window.innerWidth - 10;
        canvas.height = window.innerHeight - 10;
    }

    window.addEventListener('resize', resizeCanvas);

    resizeCanvas();

    var img = document.createElement('img');
    img.src = "images/snake.png";

    var i = 0;
    // setInterval(function () {
    img.onload = function () {
        setInterval(function () {

            checkKey(Window.event);
            context.drawImage(img, x, y, 64, 64);

        }, 1000);
    };

    function checkKey(e) {
        context.clearRect(x, y, 64, 64);
        if (e.keyCode) {
            if (e.keyCode == '38') {
                y += 64;
            }
            else if (e.keyCode == '40') {
                y -= 64;
            }
            else if (e.keyCode == '37') {
                x -= 64;
            }
            else if (e.keyCode == '39') {
                x += 64;
            }
        }

    }


}());