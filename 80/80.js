(function () {
    "use strict";
    var contactTable = get("table");
    var i = 0;
    get('colors').innerHTML = 'start';

    function get(id) {
        return document.getElementById(id);
    }


    function addToTable(array) {
        var row = contactTable.insertRow();
        array.forEach(function (element) {
            var cell = row.insertCell();
            cell.innerHTML = element;
        });
    }


    get('addToTable').addEventListener('click', function (event) {
        //event.preventDefault();
        var fname = get('fname').value;
        var lname = get('lname').value;
        var email = get('email').value;
        var phone = get('phone').value;

        var contact = [fname, lname, email, phone];
        addToTable(contact);

        get('fname').value = "";
        get('lname').value = "";
        get('email').value = "";
        get('phone').value = "";

    });

    var set;
    var colors = ['red', 'blue', 'green', 'purple', 'yellow'];
    function setBackground() {

        document.body.style.backgroundColor = colors[i];
        ++i;
        if (i == colors.length) {
            i = 0;
        }

    }
    function setBackgroundRGB() {
        var r = (Math.floor(Math.random() * 256));
        var g = (Math.floor(Math.random() * 256));
        var b = (Math.floor(Math.random() * 256));

        document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

    }
    get('colors').addEventListener('click', function () {
        if (get('colors').innerHTML === 'start') {
            set = setInterval(setBackgroundRGB, 1000);

            get('colors').innerHTML = 'stop';
        }
        else if (get('colors').innerHTML === 'stop') {
            clearInterval(set);
            get('colors').innerHTML = 'start';
        }
    });

}());
