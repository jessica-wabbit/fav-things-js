var concatFavs = function (fav1, fav2, fav3) {
   return fav1 + ", " + fav2 + ", " + fav3;
};

$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();
    var favFoodsInput = $("input#favFood").val();
    var favColorsInput = $("input#favColor").val();
    var favAnimalsInput= $("input#favAnimal").val();
    var array = [favFoodsInput, favColorsInput, favAnimalsInput];
    var favThings = concatFavs(favFoodsInput, favColorsInput, favAnimalsInput);
    $("#favThingsOutput").text(array[0]);
    console.log(array);

    console.log(array[0]);

  });
});
