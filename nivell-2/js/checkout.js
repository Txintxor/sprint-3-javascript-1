//Data input variables
let valFname, valEmail, valAddress, valSname, valPass, valPhone;

//Array to store input id´s
let inputArray = [
  "fName",
  "fEmail",
  "fAddress",
  "fLastN",
  "fPassword",
  "fPhone",
];

//Input flags used to validate form
let fName = (fEmail = fAddress = fLastN = fPassword = fPhone = false);

let flagArray = [fName, fEmail, fAddress, fLastN, fPassword, fPhone];

//Variable which stores the data output
let dataObject = {};

//Regular Expressions checkers for input fields
let regExMail = /[.\w]+@([\w-]+\.)+([\w-]+){3,}/;
let regExLetter = /^[a-z]{3,}$/i;
let regExPass = /(\w*\d+[a-z]+\w*)/gi;

//Regex Validation functions
let mailVal = (val) => regExMail.test(val);
let letterVal = (val) => regExLetter.test(val);
let passVal = (val) => regExPass.test(val);

//Function used to refresh correct inputs and flag them as correct
function correctInput(id, correctId) {
  let element = document.getElementById(id);
  let correctElement = document.getElementById(correctId);
  let classCorrectArray = ["form-control", "ml-3"];

  correctElement.className = "invalid-feedback";
  element.className = "";
  for (let i = 0; i < classCorrectArray.length; i++) {
    element.classList.add(classCorrectArray[i]);
  }

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] == id) {
      flagArray[i] = true;
    }
  }
}
//Function used to alert on input errors
function inputError(id, errorId) {
  let element = document.getElementById(id);
  let errorElement = document.getElementById(errorId);
  let classErrorArray = ["border", "border-danger", "text-danger"];

  errorElement.className = "rounded";

  for (let i = 0; i < classErrorArray.length; i++) {
    element.classList.add(classErrorArray[i]);
    errorElement.classList.add(classErrorArray[i]);
  }
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] == id) {
      flagArray[i] = false;
    }
  }
}

function inputCheck(id, value) {
  switch (id) {
    case "fName":
      dataObject.name = value;
      if (!letterVal(dataObject.name)) {
        inputError("fName", "errorName");
      } else {
        correctInput("fName", "errorName");
      }
      break;
    case "fEmail":
      dataObject.email = value;
      if (!mailVal(dataObject.email)) {
        inputError("fEmail", "errorEmail");
      } else {
        correctInput("fEmail", "errorEmail");
      }
      break;
    case "fAddress":
      dataObject.address = value;
      if (dataObject.address.length < 3) {
        inputError("fAddress", "errorAddress");
      } else {
        correctInput("fAddress", "errorAddress");
      }
      break;
    case "fLastN":
      dataObject.lastName = value;
      if (!letterVal(dataObject.lastName)) {
        inputError("fLastN", "errorLastN");
      } else {
        correctInput("fLastN", "errorLastN");
      }
      break;
    case "fPassword":
      dataObject.password = value;
      if (!passVal(dataObject.password)) {
        inputError("fPassword", "errorPassword");
      } else {
        correctInput("fPassword", "errorPassword");
      }
    case "fPhone":
      dataObject.phone = value;
      if (dataObject.phone.length < 9) {
        inputError("fPhone", "errorPhone");
      } else {
        correctInput("fPhone", "errorPhone");
      }
      break;
  }
}

function validate(event) {
  // Check if fields are correctly filled
  for (let i = 0; i < flagArray.length; i++) {
    if (!flagArray[i]) {
      event.preventDefault();
      alert("Check and correct marked fields");
      return false;
    } else {
      alert("Good job");
      return dataObject;
    }
  }
}
//Input event listener

let form = document.getElementById("form");
form.addEventListener("focusout", (e) =>
  inputCheck(e.target.id, e.target.value)
);
