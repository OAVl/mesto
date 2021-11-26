export default class FormValidator {
    _popupAddElement = document.querySelector('.popup_element');
    _buttonElement = this._popupAddElement.querySelector('.popup__button');
    

    constructor(config, formElement) {
        this._config = config;
        this._formElement = formElement;
    }

    _handleFieldValidation(evt, inputErrorClass) {
        FormValidator._element = evt.target;
        const elementError = document.querySelector(`#${FormValidator._element.id}-error`);
        FormValidator._element.setCustomValidity('');
        FormValidator._element.classList.toggle(inputErrorClass, !FormValidator._element.validity.valid);
        elementError.textContent = FormValidator._element.validationMessage;
    }

    _setEventListener(formElement, {inputSelector, submitButtonSelector, inputErrorClass}) {
        this._inputList = Array.from(document.querySelectorAll(inputSelector));
        this._buttonElement = this._formElement.querySelector(submitButtonSelector);

        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', (evt) => {
            this._handleFieldValidation(evt, inputErrorClass);
            })
        });

        this._formElement.addEventListener('input', (evt) => {
            this._handleFormInput(evt, this._buttonElement);
        })
    }

   _handleFormInput(evt) {
        this._toggleButton(evt.currentTarget, this._buttonElement);
    }

    _toggleButton(form) {
        this._buttonElement.disabled = !form.checkValidity();
    }

    enableValidation({formSelector, ...arr}) {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListener(this._formElement, arr);
    }
}