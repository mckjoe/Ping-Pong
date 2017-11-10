

$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    console.log(userInput);

    $(".outputText").text(userInput);
    $("#output").show();
  });
});
