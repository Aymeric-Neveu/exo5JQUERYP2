$(function() {
  $("input").focus(function() {
    $("#lastName").css("border", "1px solid green");
  }):
  $("input").focus(function() {
    $("#firstName").css("border", "1px solid green");
  });
  $("input").focusout(function() {
    $("#lastName").css("border", "1px solid red");
  });
  $("input").focusout(function(){
    $("#firstName").css("border", "1px solid red");
  });
})
