// ================= NAVBAR MENU =================

const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// ================= ALL ELEMENTS =================

const registerBtn = document.querySelector(".register-btn");

const registerForm = document.getElementById("registerForm");

const registerBox = document.getElementById("registerBox");
const loginBox = document.getElementById("loginBox");
const resetBox = document.getElementById("resetBox");

const registerCloseBtn =
document.getElementById("registerCloseBtn");

const loginCloseBtn =
document.getElementById("loginCloseBtn");

const resetCloseBtn =
document.getElementById("resetCloseBtn");


// ================= OPEN REGISTER POPUP =================

registerBtn.addEventListener("click", () => {

  registerForm.classList.add("active");

  showBox(registerBox);

});


// ================= SHOW BOX FUNCTION =================

function showBox(box){

  registerBox.style.display = "none";
  loginBox.style.display = "none";
  resetBox.style.display = "none";

  box.style.display = "block";

}


// ================= CLOSE POPUP FUNCTION =================

function closePopup(button){

  button.addEventListener("click", () => {

    registerForm.classList.remove("active");

  });

}

closePopup(registerCloseBtn);
closePopup(loginCloseBtn);
closePopup(resetCloseBtn);


// ================= SHOW LOGIN FORM =================

const showLogin =
document.getElementById("showLogin");

showLogin.addEventListener("click", (e) => {

  e.preventDefault();

  showBox(loginBox);

});


// ================= FORGOT PASSWORD =================

const forgotPasswordLink =
document.getElementById("forgotPasswordLink");

forgotPasswordLink.addEventListener("click", (e) => {

  e.preventDefault();

  showBox(resetBox);

});


// ================= PASSWORD TOGGLE FUNCTION =================

function togglePassword(toggleId, fieldId){

  const toggle =
  document.getElementById(toggleId);

  const field =
  document.getElementById(fieldId);

  toggle.addEventListener("click", () => {

    if(field.type === "password"){

      field.type = "text";

      toggle.innerHTML =
      '<i class="fa-solid fa-eye-slash"></i>';

    }

    else{

      field.type = "password";

      toggle.innerHTML =
      '<i class="fa-solid fa-eye"></i>';

    }

  });

}

togglePassword("togglePassword", "password");

togglePassword("toggleLoginPassword", "loginPassword");


// ================= REGISTER FUNCTION =================

const registerButton =
document.getElementById("registerButton");

registerButton.addEventListener("click", () => {

  const username =
  document.getElementById("registerUsername").value;

  const email =
  document.getElementById("email").value;

  const password =
  document.getElementById("password").value;

  const emailPattern =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(username === "" || email === "" || password === ""){

    alert("Please fill all fields");

  }

  else if(!emailPattern.test(email)){

    alert("Please enter valid email");

  }

  else{

    localStorage.setItem("username", username);

    localStorage.setItem("password", password);

    alert("Registration Successful");

    showBox(loginBox);

  }

});


// ================= LOGIN FUNCTION =================

const loginButton =
document.getElementById("loginButton");

loginButton.addEventListener("click", () => {

  const username =
  document.getElementById("loginUsername").value;

  const password =
  document.getElementById("loginPassword").value;

  const savedUsername =
  localStorage.getItem("username");

  const savedPassword =
  localStorage.getItem("password");

  if(username === "" || password === ""){

    alert("Please fill all fields");

  }

  else if(
    username === savedUsername &&
    password === savedPassword
  ){

    alert("Login Successful");

    registerForm.classList.remove("active");

  }

  else{

    alert("Wrong Username or Password");

  }

});


// ================= RESET PASSWORD =================

const resetButton =
document.getElementById("resetButton");

resetButton.addEventListener("click", () => {

  const resetUsername =
  document.getElementById("resetUsername").value;

  const newPassword =
  document.getElementById("newPassword").value;

  const savedUsername =
  localStorage.getItem("username");

  if(resetUsername === savedUsername){

    localStorage.setItem("password", newPassword);

    alert("Password Updated Successfully");

    showBox(loginBox);

  }

  else{

    alert("Username not found");

  }

});