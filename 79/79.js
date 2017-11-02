
document.getElementById("submit").addEventListener("click", function () {
    "use strict";
    var textColor = document.getElementById('text-color').value;
    var backgroundColor = document.getElementById('background-color').value;
    document.body.style.color = textColor;
    document.body.style.backgroundColor = backgroundColor;
});


