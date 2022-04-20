const form = document.querySelector(".container");
const male = document.querySelector(".male");
const female = document.querySelector(".female");
const visa = document.querySelector(".visa");
const paypal = document.querySelector(".paypal");

function toggleClassForValueMissing(inputElement, className) {
  if (inputElement.validity.valueMissing) {
    if (!inputElement.classList.contains(className)) {
      inputElement.classList.add(className);
    }
  } else {
    if (inputElement.classList.contains(className)) {
      inputElement.classList.remove(className);
    }
  }
}
function checkValueMissing(elementArr) {
  let isValid = true;
  for (let element of elementArr) {
    if (element.validity.valueMissing) {
      isValid = false;
    }
  }
  return isValid;
}

form.addEventListener("input", (e) => {
  if (e.target.classList.contains("err")) {
    e.target.classList.remove("err");
  }

  if (e.target.name == "gender") {
    const genders = document.querySelector(".genders");
    if (genders.classList.contains("err")) {
      genders.classList.remove("err");
    }
  }
  if (e.target.name == "payment-type") {
    const paymentType = document.querySelector(".card-btns");
    if (paymentType.classList.contains("err")) {
      paymentType.classList.remove("err");
    }
  }
});

// choose gender and form of payment toggles
male.addEventListener("click", () => {
  if (!male.classList.contains("active")) {
    male.classList.toggle("active");
    if (female.classList.contains("active")) {
      female.classList.toggle("active");
    }
  }
});
female.addEventListener("click", () => {
  if (!female.classList.contains("active")) {
    female.classList.toggle("active");
    if (male.classList.contains("active")) {
      male.classList.toggle("active");
    }
  }
});

visa.addEventListener("click", () => {
  if (!visa.classList.contains("active")) {
    visa.classList.toggle("active");
    if (paypal.classList.contains("active")) {
      paypal.classList.toggle("active");
    }
  }
});
paypal.addEventListener("click", () => {
  if (!paypal.classList.contains("active")) {
    paypal.classList.toggle("active");
    if (visa.classList.contains("active")) {
      visa.classList.toggle("active");
    }
  }
});

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
  let isValid = true;

  toggleClassForValueMissing(name, "err");
  toggleClassForValueMissing(email, "err");
  toggleClassForValueMissing(password, "err");
  toggleClassForValueMissing(ccnum, "err");
  toggleClassForValueMissing(cvc, "err");
  toggleClassForValueMissing(ccexp, "err");

  isValid = checkValueMissing([name, email, password, ccnum, cvc, ccexp]);

  let dobCheck = true;
  for (let i = 0; i < dob.length; i++) {
    dobCheck = checkValueMissing([dob[i]]);
    toggleClassForValueMissing(dob[i], "err");
  }
  if (!dobCheck) {
    isValid = false;
  } else {
    dob.forEach((e) => {
      if (e.classList.contains("err")) {
        e.classList.remove("err");
      }
    });
  }

  let genderCheck = false;
  for (let i in genders) {
    if (genders[i].checked) {
      genderCheck = true;
    } else if (!genders[i].checked) {
      if (!genderContainer.classList.contains("err")) {
        genderContainer.classList.add("err");
      }
    }
  }
  if (!genderCheck) {
    isValid = false;
  } else {
    if (genderContainer.classList.contains("err")) {
      genderContainer.classList.remove("err");
    }
  }

  let payTypeCheck = false;
  for (let i in formOfPayment) {
    if (formOfPayment[i].checked) {
      payTypeCheck = true;
    } else if (!formOfPayment[i].checked) {
      if (!payFormContainer.classList.contains("err")) {
        payFormContainer.classList.add("err");
      }
    }
  }
  if (!payTypeCheck) {
    isValid = false;
  } else {
    if (payFormContainer.classList.contains("err")) {
      payFormContainer.classList.remove("err");
    }
  }

  if (!acceptTerms.checked) {
    isValid = false;
    if (!acceptTermsLabel.classList.contains("not-checked")) {
      acceptTermsLabel.classList.add("not-checked");
    }
  } else {
    if (acceptTermsLabel.classList.contains("not-checked")) {
      acceptTermsLabel.classList.remove("not-checked");
    }
  }

  if (!isValid) {
    event.preventDefault();
  }
}
