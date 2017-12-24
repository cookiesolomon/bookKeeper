// var password = document.getElementById("password")
//   , confirm_password = document.getElementById("confirm_password");

// function validatePassword() {
//   if (password.value != confirm_password.value) {
//     confirm_password.setCustomValidity("Passwords Don't Match");
//   } else {
//     confirm_password.setCustomValidity('');
//   }
// }

// password.onchange = validatePassword;
// confirm_password.onkeyup = validatePassword;


// Add an onclick event and a function called
//  submitForm to handle the form's submission. Only use our answer to double-check yours.

var submitForm = function () {
  // Add a rule so that the username must be over 5 characters. If the button is clicked and the username is too short then tell the user in a div below the button,
  // otherwise send an alert to thank them personally.


  var userName = document.getElementById("user-name").value;
  var errorMessage = document.getElementById("error");

  //Check the password is at least 6 characters long. If not, write to the msg div as we did with the username.

  var passInput = document.getElementById("password").value;
  if (passInput.length >= 1 && passInput.length <= 6) {
    document.getElementById("pass-error").innerHTML = "Please enter a password that is more that 6 characters";
  }


  if (userName.length >= 1 && userName.length < 5) {
    errorMessage.innerHTML = "The supplied username is too short try again using 5 or more characters";

  } else if (userName.length >= 5) {
    alert("Thanks " + userName);
  }
  //Make sure both passwords are the same. If not, write the error to the msg div.
  var pass1 = document.getElementById("password").value;
  var pass2 = document.getElementById("confirm_password").value;
  if (pass1 !== pass2) {
    document.getElementById("pass-error").innerHTML = "your passwords do not match";
  }

  //Only allow the country to be either Israel or USA. If not you know what to do!
  var place = document.getElementById("countries").value;
  
  //If the country is US or Israel things are good
  //If place !== Israel or place !== US and the quotes  things are bad
  if(place !== "Israel" && place !== "United States of America"){
    document.getElementById("country-error").innerHTML = "invalid country";
  }


  // if(place !== "United States of America" && place !== "") {
  //   document.getElementById("country-error").innerHTML = "invalid country";
  // } else if (place !== "Israel" && place !== "") {
  //   document.getElementById("country-error").innerHTML = "invalid country";
  // }

  //Add code to validate that the phone number is shorter than 15 digits and if not..
var phoneNum = document.getElementById("number").value;
if(phoneNum.length > 0 && phoneNum.length < 15){
  document.getElementById("phone-error").innerHTML = "please enter a valid phone number";

}
else{
  document.getElementById("validate").innerHTML = "Thanks for submitting the form correctly!";
  
  
}

}













