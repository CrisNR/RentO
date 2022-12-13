function validateForm() {

    var x = document.forms["sign-in"]["email"].value;
    var y = document.forms["sign-in"]["password"].value;

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


    alert("You entered " + x + " and " + y);
    return true;
  }
  
  
  const togglePassword = document.querySelector("#togglePassword");
  const password = document.querySelector("#password");
  
  togglePassword.addEventListener("click", function () {
  
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    this.classList.toggle("bi-eye");
  });
  
