export default class Card {
    _imgPopup = document.querySelector('.popup__img');
    _titlePopup = document.querySelector('.popup__text');
    _bigImagePopup = document.querySelector('.popup_image');
    
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
        this._imgPopup.src = this._link;
        this._imgPopup.alt = this._name;
        this._titlePopup.textContent = this._name;

        this._openPopup(this._bigImagePopup);
    }

    _handleCardRemove() {
        const parentElement = this._element.querySelector('.element__button-delete').closest('.element');
        parentElement.remove();
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

    render(container) {
        this._element = this._cardSelector.content.cloneNode(true).children[0];

        const elementImage = this._element.querySelector('.element__image');
        this._element.querySelector('.element__title').textContent = this._name;
        elementImage.src = this._link;
        elementImage.alt = this._name;
        this._setEventListeners();
       
        container.prepend(this._element);
    }
}
