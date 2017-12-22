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
            $('#slide').attr('src', loadedData[slideNumber].img);
        });
        $('#next').click(function () {
            if (slideNumber < loadedData.length - 1) {
                slideNumber++;
            }
            else {
                slideNumber = 0;
            }
            $('#slide').attr('src', loadedData[slideNumber].img);

        });
        setInterval(function () {
            $('#slide').attr('src', loadedData[slideNumber].img);
            if (slideNumber < loadedData.length - 1) {
                slideNumber++;
            }
            else {
                slideNumber = 0;
            }
        }, 3000);

    });

}());
