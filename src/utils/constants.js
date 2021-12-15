export const imgPopup = document.querySelector('.popup__img');
export const titlePopup = document.querySelector('.popup__text');
export const bigImagePopup = document.querySelector('.popup_image');
export const popupProfile = document.querySelector('.popup_profile');
export const buttonOpenPopupProfile = document.querySelector('.profile__button-edit');
export const popupFormProfile = popupProfile.querySelector('.popup__form');
export const nameInput = popupFormProfile.querySelector('.popup__field_input_name');
export const jobInput = popupFormProfile.querySelector('.popup__field_input_job');
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__description');
export const elementList = document.querySelector('.elements');
export const templateElement = document.querySelector('.template-element');
export const popupAddElement = document.querySelector('.popup_element');
export const elementAddButton = document.querySelector('.profile__button-add');
export const elementTitleInput = popupAddElement.querySelector('.popup__field_input_name');
export const elementImgInput = popupAddElement.querySelector('.popup__field_input_job');
export const elementForm = popupAddElement.querySelector('.popup__form');
export const popups = document.querySelectorAll('.popup');
export const buttonElement = popupAddElement.querySelector('.popup__button');
export const popupButton = popupProfile.querySelector('.popup__button');
export const inputList = Array.from(document.querySelectorAll('.popup__field'));
export const formPopupProfile = popupProfile.querySelector('.popup__form');
export const formPopupAddElement = popupAddElement.querySelector('.popup__form');
export const popupOpened = document.querySelector('.popup_opened');

export const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__button',
  inputErrorClass: 'popup__field_type_error',
}
export const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];