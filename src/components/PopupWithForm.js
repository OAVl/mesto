import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(selectorPopup, {submitRenderer}) {
        super(selectorPopup);
        this._submitRenderer = submitRenderer;
        this._inputList = document.querySelectorAll('.popup__field');
    }

    _getInputValues() {
      this._formValues = {};
      this._inputList.forEach(input => this._formValues[input.name] = input.value);

      return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._selectorPopup.querySelector('.popup__form').addEventListener('submit', (evt) => {
          evt.preventDefault();
          this._submitRenderer(this._getInputValues());
        });
    }

    close() {
        this._inputList.forEach(input => input.value = '');
        super.close();
    }
}
