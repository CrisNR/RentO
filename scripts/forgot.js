function validateForm() {
    var x = document.forms["forgot-password"]["email"].value;
    if (x == "" || x == null) {
      alert("Email must be filled out.");
      return false;
    }
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(x)))
    {
      alert("You have entered an invalid email address!")
      return false;
    }
  }
  
  
