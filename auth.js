// Protect portfolio page
function checkLogin() {
  const user = localStorage.getItem("user");
  const pass = localStorage.getItem("pass");


if (!localStorage.getItem("loggedIn")) {
    window.location.href = "signin.html";
}

}

// Signup
function signup() {
  const user = document.getElementById("newUser").value;
  const pass = document.getElementById("newPass").value;

  if (user && pass) {
    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);
    alert("Account created!");
    window.location = "signin.html";
  } else {
    alert("Please fill all fields");
  }
}

// Login
function login() {
  const user = document.getElementById("signinUser").value;
  const pass = document.getElementById("signinPass").value;

  const storedUser = localStorage.getItem("user");
  const storedPass = localStorage.getItem("pass");

  if (user === storedUser && pass === storedPass) {
    window.location = "index.html"; // portfolio
  } else {
    alert("Incorrect username or password");
  }
}

// Logout
function logout() {
  localStorage.removeItem("user");
  localStorage.removeItem("pass");
  window.location = "signin.html";
}
