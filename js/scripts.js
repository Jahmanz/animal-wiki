// $(document).ready(function() {
//   var animal = (prompt("What animal are you interested in learning about? Bigfoot, Cats or Honeybadger?"));
//
//   if (animal === "bigfoot") {
//     $('#bigfoot').show();
//   }
//   if (animal === "cats") {
//     $('#cats').show();
//   }
//   if (animal === "honeybadger") {
//     $('#honeybadger').show();
//   }
// });

$(document).ready(function() {
  $("button#bigfoot").click(function() {
    $("#bigfoot-text").show();
    $("#cats-text").hide();
    $("#honeybadger-text").hide();
  });

  $("button#cats").click(function() {
    $("#cats-text").show();
    $("#bigfoot-text").hide();
    $("#honeybadger-text").hide();
  });

  $("button#honeybadger").click(function() {
    $("#honeybadger-text").show();
    $("#cats-text").hide();
    $("#bigfoot-text").hide();
  });

});
