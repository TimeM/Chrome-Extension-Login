$(document).ready(function() {
  Parse.initialize("LcQYRvseB9ExXGIherTt1v2pw2MVzPFwVXfigo11", "F5enB5XfOfqo4ReAItZCkJVxOY76hoveZrOMwih9");

  // FUNCTION FOR SIGNING IN
  $('#signIn').on('click', function() {
    console.log("check");
    console.log("username: " + $('#username').val());
    console.log("password: " + $('#password').val());

    var username = $('#username').val();
    var password = $('#password').val();

    if(username.length < 0) {
      alert("Please type in your username.");
    }
    if(password.length < 0) {
      alert("Please type in your password");
    }
    authenticateUser(username, password);
  });

  var counter = 5;
  var authenticateUser = function(username, password) {
    Parse.User.logIn(username, password, {
      success: function() {
        // If user inputs correct information
        console.log("Correct!!!");
        document.cookie="username=" + username;
        var newUrl = "http://timem.github.io/assignments.html";
        chrome.tabs.create({url: newUrl});
      },
      error: function() {
        //alert("Incorrect Password.");
        //If user inputs incorrect information
        counter--;
        if(counter == 0) {
          alert("You have exceeded the limit. Please make a new account!");
          var newUrl = "http://timem.github.io/registration.html";
          chrome.tabs.create({url: newUrl});
        } else {
          alert("Incorrect Password. You have " + counter + " tries left!");
        }
      }
     });
  }

  // FUNCTION FOR SIGNING UP
  $('#signUp').on('click', function() {
    console.log("User wants to sign up!");
    var newUrl = "http://timem.github.io/registration.html";
    chrome.tabs.create({url: newUrl});
  });
});
