<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll(".inp input");
  
    inputs.forEach(input => {
      input.addEventListener("input", function() {
        const label = this.nextElementSibling;
        label.classList.toggle("up", this.value.trim() !== "");
      });
    });
  });
  
  function focusinp(inp) {
    if (inp == 'usr') {
        document.getElementById("username").focus();
    } else if (inp == 'pass') {
        document.getElementById("password").focus();
    } else if (inp == 'email') {
        document.getElementById("email").focus();
    } else {
        document.getElementById("username").focus();
    }
}
=======
document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll(".inp input");
  
    inputs.forEach(input => {
      input.addEventListener("input", function() {
        const label = this.nextElementSibling;
        label.classList.toggle("up", this.value.trim() !== "");
      });
    });
  });
  
  function focusinp(inp) {
    if (inp == 'usr') {
        document.getElementById("username").focus();
    } else if (inp == 'pass') {
        document.getElementById("password").focus();
    } else if (inp == 'email') {
        document.getElementById("email").focus();
    } else {
        document.getElementById("username").focus();
    }
}
>>>>>>> 8e364fb5d4dcf2b760822491607859b9cf6b653c
