(function () {
    "use strict";
    $('input').click(function () {
        getRecipe(this.value);
    });

    function getRecipe(recipeName) {
        $.get('78.php', function (loadedData) {
            var parsed = JSON.parse(loadedData);
            parsed.forEach(function (elem) {
                if (elem.title === recipeName) {
                    $('#recipeTitle').text(elem.title);
                    $('#recipeBody').text(elem.recipes);
                    $('img').attr('src', elem.img);
                }

            });

        });
    }

}());