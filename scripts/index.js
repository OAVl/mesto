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
const bigImagePopup = document.querySelector('.popup_image');
const imgPopup = document.querySelector('.popup__img');
const titlePopup = document.querySelector('.popup__text');
const popups = document.querySelectorAll('.popup');
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

function generateCard (name, link) {
  const itemElement = templateElement.content.cloneNode(true);
  const elementImage = itemElement.querySelector('.element__image');
  itemElement.querySelector('.element__title').textContent = name;
  elementImage.src = link;
  elementImage.alt = name;

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
    imgPopup.src = link;
    imgPopup.alt = name;
    titlePopup.textContent = name;

    openPopup(bigImagePopup);
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
  elementTitleInput.value = '';
  elementImgInput.value = '';
  enableValidation();
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
elementAddButton.addEventListener('click', () => {openPopup(popupAddElement);});
elementForm.addEventListener('submit', handleSubmitCard);

render();
