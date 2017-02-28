var favThings = favFoodsInput.concat(favColorsInput, favAnimalsInput)


$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var favFoodsInput = $("input#favFood").val();
    var favColorsInput = $("input#favColor").val();
    var favAnimalsInput= $("input#favAnimal").val();



    $("#output").show(favThings);

    event.preventDefault();
  });
});
