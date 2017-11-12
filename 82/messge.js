(function () {
    var i = 0;
    var String = '' + i + 'px';
    function get(id) {
        return document.getElementById(id);
    }
    get('submit').addEventListener('click', function () {
        if (document.getElementById("modal").checked === true) {
            addModal();
        }

        addMessage('message');
    });
    function addMessage(msg) {
        var newDiv = document.createElement("div");
        newDiv.style.width = '200px';
        newDiv.style.height = '200px';
        newDiv.style.backgroundColor = 'lightblue';
        newDiv.style.position = 'absolute';
        newDiv.style.top = 'calc(40% + ' + i + 'px)';
        newDiv.style.left = 'calc(40% + ' + i + 'px)';
        newDiv.style.textAlign = 'center';
        newDiv.style.lineHeight = '200px';

        var newContent = document.createTextNode(get('message').value);
        newDiv.appendChild(newContent);
        document.body.appendChild(newDiv);
        i += 30;
    }
    function addModal() {
        var Div2 = document.createElement("div");
        Div2.style.width = '100%';
        Div2.style.height = '100%';
        Div2.style.backgroundColor = 'lightgrey';
        Div2.style.position = 'absolute';
        Div2.style.top = '0';
        Div2.style.opacity = '.5';
        Div2.style.zIndex = '22';

        document.body.appendChild(Div2);
    }
    var allDivs = document.getElementsByTagName('div');
    for (var x = 0; x < allDivs.length; x++) {
        allDivs[i].addEventListener('click', function (event) {
            event.style.zIndex = 50;
        });
    }

}());