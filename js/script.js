
var outputTexts = [];

var count = function(userInput) {
  var digits = [];
  for (var i = 1; i <= userInput; i++) {
    digits.push(i);
  }
  return digits
  }
var conditions = function(results) {
  results.forEach(function(result) {
    if (result % 3 === 0) {
      outputTexts.push("ping");
    } else if (result % 5 === 0) {
      outputTexts.push("pong");
    } else {
      outputTexts.push(result)
    }
  });
}


$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    var results = count(userInput);
    var output = conditions(results);
    // console.log(result);
    console.log(outputTexts);

    outputTexts.forEach(function(outputText) {
      $("#unstyled").append("<li>" + outputText);
    });
    $("#output").show();
  });
});
