// Contents of outputTexts will be displayed in the html after going through a forEach() loop and appended to a ul called "unstyled"
var outputTexts = [];

 // This function creates an array from 1 - userinput.
var count = function(userInput) {
  var digits = [];
  for (var i = 1; i <= userInput; i++) {
    digits.push(i);
  }
  return digits
}

// This function runs conditions to see what to push into outputTexts
var conditions = function(results) {
  results.forEach(function(result) {
    if (result % 15 === 0) {
      outputTexts.push("pingpong")
    } else if (result % 3 === 0) {
      outputTexts.push("ping")
    } else if (result % 5 === 0) {
      outputTexts.push("pong")
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

    // for each function will append individul items to the "unstyled list"
    outputTexts.forEach(function(outputText) {
      $("#unstyled").append("<li>" + outputText);

    });
    // makes the hidden div show for the users delight
    $("#output").show();
  });
});
