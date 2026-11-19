function validateStudentForm() {
  let isValid = true;

  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");

  const firstNameError = document.getElementById("firstNameError");
  const lastNameError = document.getElementById("lastNameError");
  const emailError = document.getElementById("emailError");

  if (firstName.value.trim() === "") {
    firstNameError.textContent = "First name is required!";
    firstName.classList.add("invalid");
    isValid = false;
  } else if (firstName.value.trim().length < 2) {
    firstNameError.textContent =
      "First name must be at least 2 characters long";
    firstName.classList.add("invalid");
    isValid = false;
  }

  if (lastName.value.trim() === "") {
    lastNameError.textContent = "Last name is required!";
    lastName.classList.add("invalid");
    isValid = false;
  } else if (lastName.value.trim().length < 2) {
    lastNameError.textContent = "Last name must be at least 2 characters long";
    lastName.classList.add("invalid");
    isValid = false;
  }

  const emailValue = email.value.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (email.value.trim() === "") {
    emailError.textContent = "Email address is required!";
    email.classList.add("invalid");
    isValid = false;
  } else if (!emailRegex.test(emailValue)) {
    lastNameError.textContent =
      "Please enter a valid email address (e.g., student@example.com)";
    lastName.classList.add("invalid");
    isValid = false;
  }
  return isValid;
}
