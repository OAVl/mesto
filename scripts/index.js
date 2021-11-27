import FormValidator from './FormValidator.js';
import Card from './Card.js';
import {initialCards} from './data.js';

const popupProfile = document.querySelector('.popup_profile');
const buttonOpenPopupProfile = document.querySelector('.profile__button-edit');
const popupFormProfile = popupProfile.querySelector('.popup__form');
const nameInput = popupFormProfile.querySelector('.popup__field_input_name');
const jobInput = popupFormProfile.querySelector('.popup__field_input_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');
const elementList = document.querySelector('.elements');
const templateElement = document.querySelector('.template-element');
const popupAddElement = document.querySelector('.popup_element');
const elementAddButton = document.querySelector('.profile__button-add');
const elementTitleInput = popupAddElement.querySelector('.popup__field_input_name');
const elementImgInput = popupAddElement.querySelector('.popup__field_input_job');
const elementForm = popupAddElement.querySelector('.popup__form');
const popups = document.querySelectorAll('.popup');
const buttonElement = popupAddElement.querySelector('.popup__button');
const popupButton = popupProfile.querySelector('.popup__button');
const inputList = Array.from(document.querySelectorAll('.popup__field'));
const formPopupProfile = popupProfile.querySelector('.popup__form');
const formPopupAddElement = popupAddElement.querySelector('.popup__form');

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__button',
  inputErrorClass: 'popup__field_type_error',
}

function createdCard(name, link) {
  const card = new Card(name, link, templateElement, openPopup);
    card.render(elementList);
}

const validationFormProfile = new FormValidator(config, formPopupProfile, inputList, popupButton);
validationFormProfile.enableValidation(config);

const validationFormAddElement = new FormValidator(config, formPopupAddElement, inputList, buttonElement);
validationFormAddElement.enableValidation(config);

function render() {
  initialCards.forEach((item) => {
    const name = item.name;
    const link = item.link;

    createdCard(name, link);
  })
}

function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

function openPopup (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

function closePopup (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}

function handleSubmitCard(evt) {
  evt.preventDefault();
  const valueTitle = elementTitleInput.value;
  const valueImg = elementImgInput.value;

  createdCard(valueTitle, valueImg);

  elementTitleInput.value = '';
  elementImgInput.value = '';
  closePopup(popupAddElement);
}

function openProfilePopup() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    openPopup(popupProfile);
}

function formSubmitHandlerProfile (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfile);
}

popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__button-close')) {
      closePopup(popup);
    }
  })
})

buttonOpenPopupProfile.addEventListener('click', openProfilePopup);
popupFormProfile.addEventListener('submit', formSubmitHandlerProfile);
elementAddButton.addEventListener('click', () => {
  buttonElement.disabled = true;
  openPopup(popupAddElement);
});
elementForm.addEventListener('submit', handleSubmitCard);

render();
