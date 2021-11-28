import {imgPopup, titlePopup, bigImagePopup} from "./constants.js";

export default class Card { 
    constructor(name, link, cardSelector, openPopup) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
        this._openPopup = openPopup;
    }

    _handleToggleLike(evt) {
        evt.target.classList.toggle('element__like_active');
    }

    _handleOpenBigImage() {
        imgPopup.src = this._link;
        imgPopup.alt = this._name;
        titlePopup.textContent = this._name;

        this._openPopup(bigImagePopup);
    }

    _handleCardRemove() {
        this._element.remove();
        this._element = null;
    }

    _setEventListeners() {
        this._element.querySelector('.element__like').addEventListener('click', (evt) => {
            this._handleToggleLike(evt);
        });

        this._element.querySelector('.element__button-delete').addEventListener('click', () => {
            this._handleCardRemove();
        });

        this._element.querySelector('.element__image').addEventListener('click', () => {           
            this._handleOpenBigImage();
        });
    }

    _createCard() {
        this._element = this._cardSelector.content.cloneNode(true).children[0];

        const elementImage = this._element.querySelector('.element__image');
        this._element.querySelector('.element__title').textContent = this._name;
        elementImage.src = this._link;
        elementImage.alt = this._name;
        this._setEventListeners();

        return this._element;
    }

    render(container) {
        container.prepend(this._createCard());
    }
}
