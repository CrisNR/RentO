var myInput = document.getElementById("password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

function validateForm() {

  var regName = /^[a-zA-Z]+$/;
  var fname = document.forms["sign-up"]["fname"].value;
  var lname = document.forms["sign-up"]["lname"].value;
  var x = document.forms["sign-up"]["email"].value;
  var y = document.forms["sign-up"]["password"].value;
  var z = document.forms["sign-up"]["re-enterpassword"].value;

  if((fname == "" || lname == "")  || (!regName.test(fname) || !regName.test(lname))){
    alert("You have entered an invalid first or last name!")
    return false;
  }

  if (x == "" || x == null) {
    alert("Email must be filled out.");
    return false;
  }
  else if (y == "" || y == null) {
    alert("Password must be filled out.");
    return false;
  }

  if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(x)))
  {
    alert("You have entered an invalid email address!")
    return false;
  }

  if(!(y == z)){

    alert("Password and Re-entered Password does not match!")
    return false;
  }

  alert("You entered " + fname + " and " + lname);
 }
  
