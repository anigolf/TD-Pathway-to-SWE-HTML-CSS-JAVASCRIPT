const formHeading = document.querySelector(".form-heading");
const formInputs = document.querySelectorAll(".contact-form-input");
const submitButton = document.getElementById("submit-btn");

formInputs.forEach((input) => {
  input.addEventListener("focus", () => { // To start typing 
    formHeading.style.opacity = "0"; // To make it transparent by setting it to zero
    setTimeout(() => {
      formHeading.textContent = `Your ${input.placeholder}`;
      formHeading.style.opacity = "1"; 
    }, 300);
  });

  input.addEventListener("blur", () => {
    formHeading.style.opacity = "0"; // To make it transparent
    setTimeout(() => {
      formHeading.textContent = "Enter Details below: ";
      formHeading.style.opacity = "1";
    }, 300);
  });
});


function validateForm(){
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  // const coursecode = document.getElementById("coursecode").value;
  // const coursedescription = document.getElementById("coursedescription").value;


  if (!name || !email || !coursecode || !coursedescription) {
    alert("Please fill in all fields.");
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailRegex)) {
    alert("Please enter a valid email address.");
    return false;
  }

  alert("Message Deliver!!!!");
  return true;
}

submitButton.addEventListener("click", () => {
  validateForm();
});
