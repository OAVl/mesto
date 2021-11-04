const popupProfile = document.querySelector('.popup_profile');
const buttonOpenPopupProfile = document.querySelector('.profile__button-edit');
const buttonClosePopupProfile = popupProfile.querySelector('.popup__button-close');
const popupFormProfile = popupProfile.querySelector('.popup__form');
const nameInput = popupFormProfile.querySelector('.popup__field_input_name');
const jobInput = popupFormProfile.querySelector('.popup__field_input_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');
const elementList = document.querySelector('.elements');
const templateElement = document.querySelector('.template-element');
const popupAddElement = document.querySelector('.popup_element');
const elementAddButton = document.querySelector('.profile__button-add');
const closeButtonPopupAddElement = popupAddElement.querySelector('.popup__button-close');
const elementTitleInput = popupAddElement.querySelector('.popup__field_input_name');
const elementImgInput = popupAddElement.querySelector('.popup__field_input_job');
const elementForm = popupAddElement.querySelector('.popup__form');
const bigImagePopup = document.querySelector('.popup_image');
const closeBigImagePopup = bigImagePopup.querySelector('.popup_image .popup__button-close');
const initialCards = [
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

function render() {
  initialCards.forEach((item) => {
    const name = item.name;
    const link = item.link;
    renderItem(name, link);
  })
}

function openedPopup (popup) {
  popup.classList.add('popup_opened');
}

function closePopup (popup) {
  popup.classList.remove('popup_opened');
  popup.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
      popup.classList.remove('popup_opened');
    }
  })
}

function generateCard (name, link) {
  const itemElement = templateElement.content.cloneNode(true);
  const elementImage = itemElement.querySelector('.element__image');
  itemElement.querySelector('.element__title').textContent = name;
  elementImage.src = link;

  const elementLike = itemElement.querySelector('.element__like');
  elementLike.addEventListener('click', (evt) => {
    evt.target.classList.toggle('element__like_active');
  });

  const buttonRemove = itemElement.querySelector('.element__button-delete');
  buttonRemove.addEventListener('click', () => {
    const parentElement = buttonRemove.closest('.element');
    parentElement.remove();
  });

  elementImage.addEventListener('click', () => {
    const imgPopup = document.querySelector('.popup__img');
    const titlePopup = document.querySelector('.popup__text');
    imgPopup.src = link;
    titlePopup.textContent = name;

    openedPopup(bigImagePopup);
  });

  return itemElement;
}

function renderItem(name, link) {
  elementList.prepend(generateCard(name, link));
}

function handleSubmitCard(evt) {
  evt.preventDefault();
  const valueTitle = elementTitleInput.value;
  const valueImg = elementImgInput.value;
  renderItem(valueTitle, valueImg);
  closePopup(popupAddElement);
}

function popupOpen() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    openedPopup(popupProfile);
}

function formSubmitHandlerProfile (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfile);
}

closePopup(popupProfile);
closePopup(popupAddElement);
closePopup(bigImagePopup);
closeBigImagePopup.addEventListener('click', () => {closePopup(bigImagePopup);})
buttonOpenPopupProfile.addEventListener('click', popupOpen);
buttonClosePopupProfile.addEventListener('click', () => {closePopup(popupProfile);});
popupFormProfile.addEventListener('submit', formSubmitHandlerProfile);
elementAddButton.addEventListener('click', () => {openedPopup(popupAddElement);});
closeButtonPopupAddElement.addEventListener('click', () => {closePopup(popupAddElement);});
elementForm.addEventListener('submit', handleSubmitCard);

render();
