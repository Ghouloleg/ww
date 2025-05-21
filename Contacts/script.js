function isValid(input) {
  input.setCustomValidity(""); 
  if (!input.validity.valid) {
    input.setCustomValidity(input.dataset.errorMessage); 
  }
}

function showError(form, input) {
  const errorElement = form.querySelector(`#${input.id}-error`); // правильно — в строке
  input.classList.add("form__input_error");
  input.classList.remove("form__input_valid");
  errorElement.textContent = input.validationMessage;
  errorElement.classList.add("form__input-error_active");
}

function hideError(form, input) {
  const errorElement = form.querySelector(`#${input.id}-error`);
  input.classList.remove("form__input_error");
  input.classList.add("form__input_valid");
  errorElement.textContent = "";
  errorElement.classList.remove("form__input-error_active");
}


function hasInvalidInput(inputs) {
  return inputs.some((input) => !input.validity.valid);
}

function toggleButtonState(inputs, button) {
  button.disabled = hasInvalidInput(inputs);
}

function setEventListeners(form) {
  const inputs = Array.from(form.querySelectorAll(".form__input"));
  const button = form.querySelector(".form__submit");
  const radioButtons = form.querySelectorAll('input[type="radio"]');

  toggleButtonState(inputs, button);

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      isValid(input);
      if (!input.validity.valid) {
        showError(form, input);
      } else {
        hideError(form, input);
      }
      toggleButtonState(inputs, button);
    });
  });

  radioButtons.forEach((radio) => {
    radio.addEventListener("change", () => {
      toggleButtonState(inputs, button);
    });
  });
}

function isValid(input) {
  input.setCustomValidity(""); 

  if (input.id === 'card') {
    const digitsOnly = input.value.replace(/\D/g, '');
    if (digitsOnly.length !== 16) {
      input.setCustomValidity(input.dataset.errorMessage);
      return;
    }
  }
  
  if (!input.validity.valid) {
    input.setCustomValidity(input.dataset.errorMessage); 
}
}

function hasInvalidInput(inputs) {
  return inputs.some((input) => {
    if (input.id === 'card') {
      const digitsOnly = input.value.replace(/\D/g, '');
      return digitsOnly.length !== 16;
    }
    return !input.validity.valid;
  });
}
function enableValidation() {
  const forms = Array.from(document.querySelectorAll(".form"));
  forms.forEach(setEventListeners);
}

enableValidation();
