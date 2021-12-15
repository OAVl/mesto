import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(selectorPopup, {submitRenderer}) {
        super(selectorPopup);
        this._submitRenderer = submitRenderer;
    }

    _getInputValues(nameSelector, jobSelector) {
       this._selectorPopup.querySelector(nameSelector).value;
       this._selectorPopup.querySelector(jobSelector).value;
    }

    setEventListeners() {
        super.setEventListeners();
        this._selectorPopup.querySelector('.popup__form').addEventListener('submit', this._submitRenderer);
    }

    close() {
        this._selectorPopup.querySelector('.popup__field_input_name').value = '';
        this._selectorPopup.querySelector('.popup__field_input_job').value = '';
        super.close();
    }
}