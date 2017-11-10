
var count = function(userInput) {
  var numbers = [];
  for (var i = 1; i <= userInput; i++) {
    numbers.push(i);
  }
  return numbers
}

$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    var result = count(userInput);
    console.log(result);

    $(".outputText").text(userInput);
    $("#output").show();
  });
});
