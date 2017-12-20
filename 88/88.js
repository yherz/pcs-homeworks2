(function () {
    "use strict";
    $('button').click(function () {
        getVideos();
    });

    function getVideos() {
        $.get('videos.json', function (loadedData) {
            loadedData.forEach(function (elem) {
                $('body').append('<div style="display:inline-block;padding:40px;"><h1>' +
                    elem.title + '</h1><video height="200px" width="200px" controls poster =' + elem.poster + ' + src="' + elem.video + '"</video></div>');
            });
        });
    }
}());

