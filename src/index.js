import './pages/index.css';
import FormValidator from './components/FormValidator.js';
import Card from './components/Card.js';
import Popup from "./components/Popup.js";
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import {
  initialCards,
  config,
  popupProfile,
  buttonOpenPopupProfile,
  elementList,
  templateElement,
  popupAddElement,
  elementAddButton,
  elementTitleInput,
  elementImgInput,
  buttonElement,
  popupButton,
  inputList,
  formPopupProfile,
  formPopupAddElement,
  bigImagePopup,
} from './utils/constants.js';
import Section from './components/Section.js';
import UserInfo from './components/UserInfo.js';


function createdCard(name, link) {
  const popupImageOpen = new PopupWithImage(name, link, bigImagePopup);
  const card = new Card(name, link, templateElement, popupImageOpen);
    card.render(elementList);
}

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const name = item.name;
    const link = item.link;
    const popupImageOpen = new PopupWithImage(name, link, bigImagePopup);
    const card = new Card(name, link, templateElement, popupImageOpen);
    const element = card.createCard();
    cardList.setItem(element);
  }
},elementList);

const popupWithFormProfile = new PopupWithForm(popupProfile,
  {submitRenderer: () => {
    const userInfo = new UserInfo('.popup__field_input_name', '.popup__field_input_job');
    userInfo.setUserInfo();
    const popupProfileClose = new Popup(popupProfile);
    popupProfileClose.close();
  }})

const popupWithFormAddElement = new PopupWithForm(popupAddElement,
  {submitRenderer: () => {
    const valueTitle = elementTitleInput.value;
    const valueImg = elementImgInput.value;
    createdCard(valueTitle, valueImg);
    popupWithFormAddElement.close();
  }})

  popupWithFormProfile.setEventListeners();
  popupWithFormAddElement.setEventListeners();
  cardList.renderItems();

const validationFormProfile = new FormValidator(config, formPopupProfile, inputList, popupButton);
validationFormProfile.enableValidation(config);

const validationFormAddElement = new FormValidator(config, formPopupAddElement, inputList, buttonElement);
validationFormAddElement.enableValidation(config);

buttonOpenPopupProfile.addEventListener('click', () => {
  const userInfo = new UserInfo('.popup__field_input_name', '.popup__field_input_job');
  userInfo.getUserInfo();
  const popupProfileOpen = new Popup(popupProfile);
  popupProfileOpen.open();
});

elementAddButton.addEventListener('click', () => {
  buttonElement.disabled = true;
  const popupAddEl = new Popup(popupAddElement);
  popupAddEl.open();
});
