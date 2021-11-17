enableValidation();

function enableValidation() {
  const forms = Array.from(document.forms);
  forms.forEach(addListenersToForm);
  const formSecond = forms[1];
  toggleButton(formSecond);
}

function addListenersToForm(form) {
  const inputs = Array.from(form.elements);
  inputs.forEach(addListenersToInput)

  form.addEventListener('submit', handleSubmitForm);
  form.addEventListener('input', handleFormInput);
}

function handleSubmitForm(evt) {
  evt.preventDefault();
}

function handleFormInput(evt) {
  toggleButton(evt.currentTarget);
}

function toggleButton(form) {
  const button = form.querySelector('.popup__button');
  button.disabled = !form.checkValidity();
}

function addListenersToInput(input) {
  input.addEventListener('input', handleFieldValidation)
}

function handleFieldValidation(evt) {
  const element = evt.target;
  const elementError = document.querySelector(`#${element.id}-error`);
  element.setCustomValidity('');
  element.classList.toggle('popup__field_type_error', !element.validity.valid);
  elementError.textContent = element.validationMessage;
}
