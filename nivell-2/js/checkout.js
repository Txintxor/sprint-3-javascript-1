

//Array to store input variables
let fName;
let fEmail;
let fAddress;
let fLastN;
let fPassword;
let fPhone;
let inputArray = [fName, fEmail, fAddress, fLastN, fPassword, fPhone];

//Regular Expressions checkers for input fields
let regExMail = /[.\w]+@([\w-]+\.)+([\w-]+){3,}/;
let regExLetter = /^[a-z]{3,}$/i;
let regExPass = /(\w*\d+[a-z]+\w*)/gi;

//Functions to check input fields
let mailVal = (val) => regExMail.test(val);
let letterVal = (val) => regExLetter.test(val);
let passVal = (val) => regExPass.test(val);

// Exercise 6
function validate() {
  // Validate fields entered by the user: name, phone, password, and email

  //Object used to store client data
  let dataObject = {};

  //Function used to alert on input errors
  function inputError(id, errorId) {
    let element = document.getElementById(id);
    let errorElement = document.getElementById(errorId);

    //As validations were disabled from bootstrap 5 
    //https://getbootstrap.com/docs/5.0/forms/validation/
    //I decided to change de classes by hand
    //Don´t know if it´s the proper approach but it seems to function just fine
    let classErrorArray = ["border", "border-danger", "text-danger"];

    errorElement.className = "rounded";

    for (let i = 0; i < classErrorArray.length; i++) {
      element.classList.add(classErrorArray[i]);
      errorElement.classList.add(classErrorArray[i]);
    }
  }

  //Function used to refresh correct inputs
  function correctInput(id, correctId) {
    let element = document.getElementById(id);
    let correctElement = document.getElementById(correctId);
    let classCorrectArray = ["form-control",  "ml-3"];

    correctElement.className = "invalid-feedback";
    element.className = "";
    for (let i = 0; i < classCorrectArray.length; i++) {
      element.classList.add(classCorrectArray[i]);
    }
  }

  //Input check and validation
  function inputCheck(id) {
    if (id.value == "") {
      switch (id) {
        case fName:
          inputError("fName", "errorName");
          break;
        case fEmail:
          inputError("fEmail", "errorEmail");
          break;
        case fAddress:
          inputError("fAddress", "errorAddress");
          break;
        case fLastN:
          inputError("fLastN", "errorLastN");
          break;
        case fPassword:
          inputError("fPassword", "errorPassword");
          break;
        case fPhone:
          inputError("fPhone", "errorPhone");
          break;
      }
    } else {
      switch (id) {
        case fName:
          dataObject.Name = id.value;
          if (!letterVal(dataObject.Name)) {
            inputError("fName", "errorName");
          } else {
            correctInput("fName", "errorName");
          }
          break;
        case fEmail:
          dataObject.Email = id.value;
          if (!mailVal(dataObject.Email)) {
            inputError("fEmail", "errorEmail");
          } else {
            correctInput("fEmail", "errorEmail");
          }
          break;
        case fAddress:
          dataObject.Address = id.value;
          if (dataObject.Address.lenght < 3) {
            inputError("fAddress", "errorAddress");
          } else {
            correctInput("fAddress", "errorAddress");
          }
          break;
        case fLastN:
          dataObject.LastName = id.value;
          if (!letterVal(dataObject.LastName)) {
            inputError("fLastN", "errorLastN");
          } else {
            correctInput("fLastN", "errorLastN");
          }
          break;
        case fPassword:
          dataObject.Password = id.value;
          if (!passVal(dataObject.Password)) {
            inputError("fPassword", "errorPassword");
          } else {
            correctInput("fPassword", "errorPassword");
          }
        case fPhone:
          dataObject.Phone = id.value;
          if (dataObject.Phone.length < 9) {
            inputError("fPhone", "errorPhone");
          } else {
            correctInput("fPhone", "errorPhone");
          }
          break;
      }
    }
  }
  for (let i = 0; i < inputArray.length; i++) {
    inputCheck(inputArray[i]);
  }
  return dataObject;
}
