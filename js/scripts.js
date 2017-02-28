var concatFavs = function (fav1, fav2, fav3) {
   return fav1 + ", " + fav2 + ", " + fav3;
};

$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();
    var favFoodsInput = $("input#favFood").val();
    var favColorsInput = $("input#favColor").val();
    var favAnimalsInput= $("input#favAnimal").val();
    var favThings = concatFavs(favFoodsInput, favColorsInput, favAnimalsInput);
    $("#favThingsOutput").text(favThings);
    console.log(favThings)

  });
});
