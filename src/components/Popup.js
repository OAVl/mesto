export default class Popup {
    constructor(selectorPopup) {
        this._selectorPopup = selectorPopup;
    }

    open() {
        this._selectorPopup.classList.add('popup_opened');
        this._handleEscClose();
    }

    close() {
        this._selectorPopup.classList.remove('popup_opened');
        this._handleEscClose();
    }

    _handleEscClose() {
        document.addEventListener('keydown', (evt) => {
          if (evt.key === "Escape") {
            this.close();
          }
        });
    }

    setEventListeners() {
        this._selectorPopup.addEventListener('click', (evt) => {
          if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__button-close')) {
            this.close();
          }
        })
    }
}
