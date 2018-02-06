(function () {
    "use strict";
    var userDIV;
    var comments;
    var start = 0;

    $('#home').click(function () {
        $('#posts').empty();
        showPosts();
    });

    function showPosts() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => placeOnPage(json));
    }

    function placeOnPage(results) {
        userDIV = $("<div><div>");
        results.forEach(element => {
            var userUL = $("<ul></ul>");
            var li = $('<li>' + element.name + '</li>' +
                '<li>' + element.website + '</li>' +
                '<li>' + element.company.name + '</li>' +
                '<li><button id="showPosts" class="posts btn btn-primary" value="' + element.id + '">Show Posts</button></li>'
            ).appendTo(userUL);
            userUL.appendTo(userDIV);
        });


        $('#posts').append(userDIV);
    }
    $('body').on('click', '#showPosts', function () { start = 0; });
    $('body').on('click', '#prev', function () {

        if ((start < 6 && start > 4) || (start >= 9)) {
            start -= 4;
        }

        else if (start > 6) {
            start -= 6;
        }
        else { start = 0; }

    });

    $('body').on('click', '.posts', function () {
        var id = this.value;
        userDIV.empty();
        fetch('https://jsonplaceholder.typicode.com/posts?userId=' + id + '')
            .then(response => response.json())
            .then(json => posts(json, id));
    });

    $('body').on('click', '.comment', function () {
        var id = this.value;

        if (this.innerHTML === "Hide") {
            this.innerHTML = "Show Comments Again!";
            $(this).next('div').hide();
        }
        else if (this.innerHTML != "Hide") {
            this.innerHTML = "Hide";
            comments = $("<div class='well'><div>");
            $(this).closest('.comment').after(comments);
            fetch('https://jsonplaceholder.typicode.com/comments?postId=' + id + '')
                .then(response => response.json())
                .then(json => placeComments(comments, json));

        }
    });
    function placeComments(comments, results) {
        var commentUL = $("<ul></ul>");
        results.forEach(element => {
            var li = $('<li>' + element.name + ', ' + element.email + ', ' + element.body + '</li>'
            ).appendTo(commentUL);
            commentUL.appendTo(comments);
        });


    }
    function posts(results, id) {
        var postsDIV;

        for (var x = 0; x < 3; x++) {
            if (start > 9) { break; }
            postsDIV = $("<div></div>");
            var p = $('<p>' + (results[start].id) + '</p>' +
                '<p>' + (results[start].title) + '</p>' +
                '<p>' + (results[start].body) + '</p>' +
                '<button class="comment btn btn-danger" value="' + results[start].id + '">Show Comments</button>').appendTo(postsDIV);

            userDIV.append(postsDIV);
            start++;
            if (start > 9) { break; }
        }
        userDIV.append('<div class="row"><button id="prev" value="' + id + '" class="posts btn">Previous</button><button id="next" value="' + id + '" class="posts btn pull-right">Next</button></div>');

    }

    showPosts();
}());