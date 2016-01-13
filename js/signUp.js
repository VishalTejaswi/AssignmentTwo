$(document).ready(function foo() {
  $("#button").click(function foo() {
    $("#register").css("display", "none");
    $("#display").css("display", "block");
    $("#display").append("<h6>User name is: " +$("#first_name").val() +" " +$("#last_name").val()  + "</h6>");
    $("#display").append("<h6>Email ID is: " + $("#email").val() + "</h6>")
    $("body").css("background","white");
    $("#footer").css("display","none");
  });
})
