const form = document.getElementById("signup-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorMsg = document.getElementById("error-msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (!usernameValue || !emailValue || !passwordValue) {
    errorMsg.textContent = "All fields are required.";
  } else if (!emailValue.includes("@") || !emailValue.includes(".")) {
    errorMsg.textContent = "Please enter a valid email.";
  } else if (passwordValue.length < 6) {
    errorMsg.textContent = "Password must be at least 6 characters.";
  } else {
    errorMsg.textContent = "";
    alert("Signup Successful!");
    form.reset();
  }
});
