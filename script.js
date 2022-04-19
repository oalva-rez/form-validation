const form = document.querySelector(".container");

form.addEventListener("submit", validateForm);

function validateForm(event) {
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const password = document.querySelector("#pwd");
  const dob = document.querySelectorAll(".date");
  const dobMonth = document.querySelector("#month");
  const dobDay = document.querySelector("#day");
  const dobYear = document.querySelector("#year");
  const genders = document.querySelectorAll('.genders input[type="radio"]');
  const genderContainer = document.querySelector(".genders");
  const formOfPayment = document.querySelectorAll(
    '.card-btns input[type="radio"]'
  );
  const payFormContainer = document.querySelector(".card-btns");
  const ccnum = document.querySelector("#ccnum");
  const cvc = document.querySelector("#cvc");
  const ccexp = document.querySelector("#exp");
  const acceptTerms = document.querySelector("#accept-terms-input");
  const acceptTermsLabel = document.querySelector("#accept-terms");
  let errMsgs = [];

  if (name.validity.valueMissing) {
    errMsgs[errMsgs.length] = "Name field cannot be empty";
    name.classList = "err";
  } else {
    name.classList = "";
  }
  if (email.validity.valueMissing) {
    errMsgs[errMsgs.length] = "Email field cannot be empty";
    email.classList = "err";
  } else {
    email.classList = "";
  }
  if (password.validity.valueMissing) {
    errMsgs[errMsgs.length] = "Password field cannot be empty";
    password.classList = "err";
  } else {
    password.classList = "";
  }
  let genderCheck = false;

  for (let i in genders) {
    if (genders[i].checked) {
      genderCheck = true;
    } else if (!genders[i].checked) {
      genderContainer.classList = "genders err";
    }
  }
  if (!genderCheck) {
    errMsgs[errMsgs.length] = "Please select a gender";
  } else {
    genderContainer.classList = "genders label";
  }

  let dobCheck = true;

  for (let i in dob) {
    if (dob[i].value == "") {
      dobCheck = false;
      dob[i].classList = "date err";
    } else if (!dob[i].value !== "") {
      dob[i].classList = "date";
    }
  }
  if (!dobCheck) {
    errMsgs[errMsgs.length] = "Date of birth field missing value(s)";
  } else {
    dob.forEach((e) => {
      e.classList = "date";
    });
  }

  let payTypeCheck = false;
  for (let i in formOfPayment) {
    if (formOfPayment[i].checked) {
      payTypeCheck = true;
    } else if (!formOfPayment[i].checked) {
      payFormContainer.classList = "card-btns err";
    }
  }
  if (!payTypeCheck) {
    errMsgs[errMsgs.length] = "Please select a form of payment";
  } else {
    payFormContainer.classList = "card-btns";
  }

  if (ccnum.validity.valueMissing) {
    errMsgs[errMsgs.length] = "Credit card number field cannot be empty";
    ccnum.classList = "err";
  } else {
    ccnum.classList = "";
  }
  if (cvc.validity.valueMissing) {
    errMsgs[errMsgs.length] = "CVC field cannot be empty";
    cvc.classList = "err";
  } else {
    cvc.classList = "";
  }
  if (ccexp.validity.valueMissing) {
    errMsgs[errMsgs.length] = "Credit card expiration date cannot be empty";
    ccexp.classList = "err";
  } else {
    ccexp.classList = "";
  }

  if (!acceptTerms.checked) {
    errMsgs[errMsgs.length] =
      "Terms and conditions must be checked to continue.";
    acceptTermsLabel.classList = "label not-checked";
  } else {
    acceptTermsLabel.classList = "label";
  }

  event.preventDefault();
}
