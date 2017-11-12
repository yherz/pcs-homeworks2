(function () {
    var i = 0;
    var zIndexplace = 10;
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
        newDiv.style.border = '1px solid blue';
        var newContent = document.createTextNode(get('message').value);
        newDiv.appendChild(newContent);
        document.body.appendChild(newDiv);
        i += 30;

        newDiv.addEventListener('click', function () {
            newDiv.style.zIndex = zIndexplace;
            console.log('hi');
            zIndexplace += 10;
        });

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


}());