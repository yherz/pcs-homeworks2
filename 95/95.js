(function () {
    "use strict";
    var canvas = document.getElementById("theCanvas"),
        context = canvas.getContext('2d'),
        ants = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function Ant(color) {
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.color = color;

    }

    function getRandomNumberBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    Ant.prototype.move = function () {
        //context.clearRect(this.x - 1, this.y - 1, 4, 4);

        this.x += getRandomNumberBetween(-2, 2);
        this.y += getRandomNumberBetween(-2, 2);
        context.fillRect(this.x, this.y, 2, 2);

        context.fillStyle = this.color;
    };


    /*var ant = new Ant();
    setInterval(() => {
        ant.move();
    }, 100);*/

    /*for (var i = 0; i < 10000; i++) {
        ants.push(new Ant());
    }*/
    $('#submit').click(function () {
        var create = $("#numberAntsToAdd").val();
        var colors = $("#colorAntsToAdd").val();
        for (var i = 0; i < create; i++) {
            var ant = new Ant(colors);
            ants.push(ant);
        }
    });

    setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        ants.forEach(ant => ant.move());
    }, 100);
}());