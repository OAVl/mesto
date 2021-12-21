import './index.css';
import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import {
  initialCards,
  config,
  buttonOpenPopupProfile,
  templateElement,
  imgPopup,
  titlePopup,
  elementAddButton,
  formPopupProfile,
  formPopupAddElement,
  nameInput,
  jobInput,
} from '../utils/constants.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';


function handleCardClick(imgPopup, titlePopup, selector) {
  const popupBigImage = new PopupWithImage(imgPopup, titlePopup, selector);
  popupBigImage.setEventListeners();
  return popupBigImage;
}

function createdCard(name, link) {
  const card = new Card(name, link, templateElement, handleCardClick(imgPopup, titlePopup, '.popup_image'));
  return card.createCard();
}

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const name = item.name;
    const link = item.link;
    cardList.addItem(createdCard(name, link));
  }
},'.elements');

const userInfo = new UserInfo({name:'.profile__name', job:'.profile__description'});

const popupWithFormProfile = new PopupWithForm('.popup_profile',
  {submitRenderer: () => {
    userInfo.setUserInfo(nameInput, jobInput);
    popupWithFormProfile.close();
  }})

const popupWithFormAddElement = new PopupWithForm('.popup_element',
  {submitRenderer: (formData) => {
      const name = formData.elementName;
      const link = formData.link;
      cardList.addItem(createdCard(name, link));
    popupWithFormAddElement.close();
  }})

popupWithFormProfile.setEventListeners();
popupWithFormAddElement.setEventListeners();
cardList.renderItems();

const validationFormProfile = new FormValidator(config, formPopupProfile);
validationFormProfile.enableValidation(config);

const validationFormAddElement = new FormValidator(config, formPopupAddElement);
validationFormAddElement.enableValidation(config);

buttonOpenPopupProfile.addEventListener('click', () => {
  userInfo.getUserInfo();
  popupWithFormProfile.open();
});

elementAddButton.addEventListener('click', () => {
  validationFormAddElement.resetValidation()
  popupWithFormAddElement.open();
});
