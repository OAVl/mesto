const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__button',
  inputErrorClass: 'popup__field_type_error',
}

function handleFormInput(evt, buttonElement) {
  toggleButton(evt.currentTarget, buttonElement);
}

function toggleButton(form, buttonElement) {
  buttonElement.disabled = !form.checkValidity();
}

const setEventListener = (formElement, {inputSelector, submitButtonSelector, inputErrorClass}) => {
  const inputList = Array.from(document.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', (evt) => {
      handleFieldValidation(evt, inputErrorClass);
    })
  });

  formElement.addEventListener('input', (evt) => {
    handleFormInput(evt, buttonElement);
  })
}

const enableValidation = ({formSelector, ...arr}) => {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListener(formElement, arr);
  });
}

function handleFieldValidation(evt, inputErrorClass) {
  const element = evt.target;
  const elementError = document.querySelector(`#${element.id}-error`);
  element.setCustomValidity('');
  element.classList.toggle(inputErrorClass, !element.validity.valid);
  elementError.textContent = element.validationMessage;
}

enableValidation(config);
