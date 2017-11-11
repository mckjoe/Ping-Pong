// biz loj;
// -----------------

    // Contents of outputTexts will be displayed in the html after going through a forEach() loop and appended to a ul called "unstyled"
var outputTexts = [];

var number = function(userInput) {
  alert(typeof userInput)
  }
    // This function creates an array from 1 - userinput.
var count = function(userInput) {
  var digits = [];
  for (var i = 1; i <= userInput; i++) {
    digits.push(i);
  }
  return digits
}

    // This function runs conditions to see what to push into outputTexts.
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
var checkInput = function(startInput){
  var x = startInput;
  if (isNaN(x)) {
    alert("Must input numbers!");
  }
}

// UserInterface Loj
// -------------------------

$(document).ready(function() {
  $("#input").submit(function(event) {
    var startInput = $("#userInput").val();
    checkInput(startInput);
    var userInput = parseInt(startInput);
    var results = count(userInput);
    var output = conditions(results); //output is undefined because I didn't need a return value

    // for each function will append individul items to the "unstyled list"
    outputTexts.forEach(function(outputText) {
      $("#unstyled").append("<li>" + outputText);

    });
    // makes the hidden div show for the users delight
    $("#initShowing").hide();
    $("#output").show();

    event.preventDefault();
  });
});
