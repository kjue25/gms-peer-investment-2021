// Script for fake password requirement
$(document).ready(function(){
    var pw = "gryphons2023"; // NOT SECURE - DO NOT ACTUALLY DO THIS FOR VALUABLE INFO
    // On submit button clicked
    $("#pwsubmit").click(function(){
      if ($("#textBox").val() != pw) {
        displayError();
      } else {
        showProjects();
      }
    });
  
    // Check for carriage return
    $("#textBox").on('keyup', function (e) {
      if (e.key === 'Enter' || e.keyCode === 13) {
        if ($("#textBox").val() != pw) {
          displayError();
        } else {
          showProjects();
        }
      }
    });
  });
  
  function displayError() {
    $("#error").text("Password Incorrect");
    $("#error").css("color","red");
    $("#textBox").val("");
  }
  
  function showProjects() {
    $("#password").css("display","none");
    $("#projects").css("display","block");
  }