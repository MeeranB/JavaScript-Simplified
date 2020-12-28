// TODO: Select all elements needed
//    Use the HTML to figure out what classes/ids will work best for selecting each element
const form = document.querySelector("#form");
const inputs = Array.from(document.querySelectorAll("input"));
const errorList = document.querySelector(".errors-list");
const errorContainer = document.querySelector(".errors");
// TODO: Create an event listener for when the form is submitted and do the following inside of it.
form.addEventListener("submit", e => {
  //    TODO: Create an array to store all error messages and clear any old error messages
  clearErrors();
  const errorArray = [];
  //    TODO: Define the following validation checks with appropriate error messages
  //      1. Ensure the username is at least 6 characters long
  //      2. Ensure the password is at least 10 characters long
  //      3. Ensure the password and confirmation password match
  //      4. Ensure the terms checkbox is checked
  const password = inputs.find(input => input.id === "password").value;
  inputs.forEach(input => {
    switch (input.id) {
      case "username":
        if (input.value.length < 6) {
          errorArray.push("Username must be at least 6 characters long");
        }
        break;
      case "password":
        if (input.value.length < 10) {
          errorArray.push("Password must be at least 10 characters long");
        }
        break;
      case "terms":
        if (!input.checked) {
          errorArray.push("Please accepts terms to continue");
        }
        break;
      case "password-confirmation":
        if (input.value !== password) {
          errorArray.push("Passwords do not match");
        }
        break;
    }
  });
  showErrors(errorArray);
  //    TODO: If there are any errors then prevent the form from submitting and show the error messages
  if (errorArray.length > 0) e.preventDefault();
});
// TODO: Define this function
function clearErrors() {
  // Loop through all the children of the error-list element and remove them
  // IMPORTANT: This cannot be done with a forEach loop or a normal for loop since as you remove children it will modify the list you are looping over which will not work
  // I recommend using a while loop to accomplish this task
  // This is the trickiest part of this exercise so if you get stuck and are unable to progress you can also set the innerHTML property of the error-list to an empty string and that will also clear the children. I recommend trying to accomplish this with a while loop, though, for practice.
  // Also, make sure you remove the show class to the errors container
  // console.log(errorList.lastElementChild);
  while (errorList.lastElementChild) {
    errorList.lastElementChild.remove();
  }
}

// TODO: Define this function
function showErrors(errorMessages) {
  // Add each error to the error-list element
  errorMessages.forEach(error => {
    const errorItem = document.createElement("li");
    errorItem.innerText = error;
    errorList.appendChild(errorItem);
  });
  errorContainer.classList.add("show");
  // Make sure to use an li as the element for each error
  // Also, make sure you add the show class to the errors container
}
