export default class FormValidator {
    constructor(config, formElement, inputList, buttonElement) {
        this._config = config;
        this._formElement = formElement;
        this._inputList = inputList;
       this._buttonElement = buttonElement;
    }

    _handleFieldValidation(evt, inputErrorClass) {
        FormValidator._element = evt.target;
        const elementError = document.querySelector(`#${FormValidator._element.id}-error`);
        FormValidator._element.setCustomValidity('');
        FormValidator._element.classList.toggle(inputErrorClass, !FormValidator._element.validity.valid);
        elementError.textContent = FormValidator._element.validationMessage;
    }

    _setEventListener(formElement, {inputSelector, submitButtonSelector, inputErrorClass}) {
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', (evt) => {
            this._handleFieldValidation(evt, inputErrorClass);
            })
        });

        this._formElement.addEventListener('input', () => {
            this._handleFormInput(this._buttonElement);
        })
    }

   _handleFormInput() {
        this._toggleButton(this._buttonElement);
    }

    _toggleButton() {
        this._buttonElement.disabled = !this._formElement.checkValidity();
    }

    enableValidation({formSelector, ...arr}) {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListener(this._formElement, arr);
    }
}