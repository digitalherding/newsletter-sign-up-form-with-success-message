// elements
let emailInput = document.querySelector("#email");
let emailInputPlaceholder = document.querySelector("#email::placeholder");
let button = document.querySelector(".button");
let errorMsg = document.querySelector(".error-msg");
let mainContent = document.querySelector("main");
let successMsg = document.querySelector(".success-msg-container");
let userEmail = document.querySelector(".user-email");
let dismissBtn = document.querySelector(".dismiss-btn");
let footer = document.querySelector("footer");

// Event listener
button.addEventListener("click", function (e) {
  e.preventDefault();
  let email = emailInput.value;
  if (emailInput !== "" && email.includes("@")) {
    let userEmailInput = emailInput.value;
    userEmail.innerHTML = userEmailInput;
    errorMsg.style.display = "none";
    mainContent.style.display = "none";
    successMsg.style.display = "flex";
    footer.style.display = "none";
  } else {
    errorMsg.style.display = "flex";
    emailInput.style.border = "2px solid hsl(0, 93%, 68%)";
    emailInput.style.backgroundColor = "hsla(0, 93%, 68%, .1)";
    emailInput.classList.add("text-tomato");
  }
});

dissMissBtn.addEventListener("click", function () {
  successMsg.style.display = "none";
  mainContent.style.display = "flex";
  emailInput.value = "";
});
