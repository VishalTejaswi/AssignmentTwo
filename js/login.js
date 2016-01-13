$(document).ready(function() {


$("#forgotPwd").click(function(){

    $(".box").toggleClass("forgot");

});
$("#signIn").click(function() {
  $(".username").hide();
  $(".password").hide();
  $("#forgotPwd").hide();
  $("#signIn").hide();
  $("#welcome").html("<h4> welcome " + $(".username").val() + "</h4>")
})


});
