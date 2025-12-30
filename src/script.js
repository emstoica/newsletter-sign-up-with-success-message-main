const form = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");
const submitButton = document.getElementById("submit-button");
const formContainer = document.querySelector(".container-bg");
const successMessage = document.querySelector(".success-message");
const dismissButton = document.getElementById("dismiss-button");
const userEmailDisplay = document.getElementById("user-email");

// Clear error message when user starts typing
email.addEventListener("input", () => {
  emailError.textContent = "";
  emailError.className = "error";
});

form.addEventListener("submit", (event) => {
  if (email.value.trim() === "" || !email.validity.valid) {
    showError();
    event.preventDefault();
  } else {
    emailError.textContent = "";
    successMessage.classList.remove("hidden");
    formContainer.classList.add("hidden");
    userEmailDisplay.textContent = email.value;
    event.preventDefault();
  }
});

function showError() {
  if (email.value.trim() === "") {
    emailError.textContent = "Email address is required.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Valid email address required.";
  }
  emailError.className = "error active";
}

dismissButton.addEventListener("click", () => {
  successMessage.classList.add("hidden");
  formContainer.classList.remove("hidden");
  form.reset();
});
