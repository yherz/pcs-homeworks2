

$('#addData').click(function () {
    $.get('86.txt', function (loadedData) {
        console.log('hello1');
        addToTable(loadedData);
    }).fail(function (xhr, statusCode) {
        alert(statusCode);
    });
});

function addToTable(data) {
    console.log('hello');
    var obj = JSON.parse(data);
    obj.forEach(function (element) {
        addContact(element);
    });
}

function addContact(data) {
    $('#table').append('<tr>' + '<td>' + data.name + '</td>' + '<td>' + data.email + '</td>' + '</tr>');
}