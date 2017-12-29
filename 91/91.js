(function () {

    $('#submit').click(function () {
        var city = $('#city').val();
        $.getJSON('http://api.geonames.org/wikipediaSearch?q=' + city + '&maxRows=1&username=jack_h&type=json&callback=?', function (data) {
            var map;
            var location = { lat: data.geonames[0].lat, lng: data.geonames[0].lng };
            map = new google.maps.Map(document.getElementById('map'), {
                center: location,
                zoom: 8
            });
            var marker = new google.maps.Marker({
                position: location,
                map: map

            });
        });
    });

}());



