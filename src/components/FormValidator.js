export default class FormValidator {
    constructor(config, formElement) {
        this._config = config;
        this._formElement = formElement;
        this._inputList = this._formElement.querySelectorAll('.popup__field');
        this._buttonElement = this._formElement.querySelector('.popup__button');
    }

    _handleFieldValidation(evt, inputErrorClass) {
        this._element = evt.target;
        const elementError = document.querySelector(`#${this._element.id}-error`);
        this._element.setCustomValidity('');
        this._element.classList.toggle(inputErrorClass, !this._element.validity.valid);
        elementError.textContent = this._element.validationMessage;
    }

    _setEventListener({inputErrorClass}) {
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

    enableValidation({...arr}) {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListener(arr);
    }

    resetValidation() {
    this._toggleButton();

    this._inputList.forEach((inputElement) => {
      inputElement.setCustomValidity('');
    });
  }
}
