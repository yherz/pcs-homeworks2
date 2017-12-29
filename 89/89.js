(function () {
    var slideNumber = 0;
    $.get('89.json', function (loadedData) {
        $('#prev').click(function () {
            if (slideNumber > 0) {
                slideNumber--;
            }
            else {
                slideNumber = loadedData.length - 1;
            }
            setImage(slideNumber);
        });
        $('#next').click(function () {
            if (slideNumber < loadedData.length - 1) {
                slideNumber++;
            }
            else {
                slideNumber = 0;
            }
            setImage(slideNumber);
        });
        setInterval(function () {
            setImage(slideNumber);
            if (slideNumber < loadedData.length - 1) {
                slideNumber++;
            }
            else {
                slideNumber = 0;
            }
        }, 3000);
        function setImage(x) {
            $('#slide').attr('src', loadedData[x].img);
        }
        $('#slide').attr('src', loadedData[0].img);
    });
}());
