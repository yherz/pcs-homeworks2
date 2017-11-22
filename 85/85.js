
(function () {
    "use strict";
    $('<div id="newText"></div>').appendTo('body');

    $('#load').click(function () {
        $.get($('input').val(), function (loadedData) {
            var loading = $('<img src="watermelon.gif">').appendTo('body');
            setTimeout(function () {
                $('#newText').text(loadedData);
                loading.hide();
            }, 3000);
        }).fail(function (xhr, statusCode, statusText) {
            $('#newText').text(statusText);
        });
    });
}());