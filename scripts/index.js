const popup = document.querySelector('.popup');
const buttonOpenPopup = document.querySelector('.profile__button-edit');
const buttonClosePopup = popup.querySelector('.popup__button-close');
const popupForm = popup.querySelector('.popup__form');
const nameInput = popupForm.querySelector('.popup__field_input_name');
const jobInput = popupForm.querySelector('.popup__field_input_job');
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
const bigImagePopup = document.querySelector('.image-popup');
const closeBigImagePopup = bigImagePopup.querySelector('.image-popup__button-close');
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

function renderItem(name, link) {
  const itemElement = templateElement.content.cloneNode(true);
  const elementImage = itemElement.querySelector('.elements__image');
  itemElement.querySelector('.elements__title').innerHTML = name;
  elementImage.src = link;

  const elementLike = itemElement.querySelector('.elements__like');
  elementLike.addEventListener('click', (evt) => {
    evt.target.classList.toggle('elements__like_active');
  });

  const buttonClose = itemElement.querySelector('.elements__button-delete');
  buttonClose.addEventListener('click', () => {
    const parentElement = buttonClose.closest('.elements__element');
    parentElement.remove();
  });

  elementImage.addEventListener('click', () => {
    const imgPopup = document.querySelector('.image-popup__img');
    const titlePopup = document.querySelector('.image-popup__text');
    imgPopup.src = link;
    titlePopup.innerHTML = name;
    bigImagePopup.classList.add('image-popup_opened');
  });

  function closeImagePopup() {
    bigImagePopup.classList.remove('image-popup_opened');
  }
  closeBigImagePopup.addEventListener('click', closeImagePopup)

  bigImagePopup.addEventListener('click', (evt) => {
    if (evt.target === evt.currentTarget) {
      closeImagePopup();
    }
  })

  elementList.prepend(itemElement);
}

function handleElements(evt) {
  evt.preventDefault();
  const valueTitle = elementTitleInput.value;
  const valueImg = elementImgInput.value;
  renderItem(valueTitle, valueImg);
  closePopupAddElement();
}

function popupOpen() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    popup.classList.add('popup_opened');
}

function openedPopupAddElement() {
  popupAddElement.classList.add('popup_element_open');
}

function closePopupAddElement() {
  popupAddElement.classList.remove('popup_element_open');
}

function popupClose() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupClose();
}

popup.addEventListener('click', (evt) => {
  if (evt.target === evt.currentTarget) {
    popupClose();
  }
})

popupAddElement.addEventListener('click', (evt) => {
  if (evt.target === evt.currentTarget) {
    closePopupAddElement();
  }
})

buttonOpenPopup.addEventListener('click', popupOpen);
buttonClosePopup.addEventListener('click', popupClose);
popupForm.addEventListener('submit', formSubmitHandler);
elementAddButton.addEventListener('click', openedPopupAddElement);
closeButtonPopupAddElement.addEventListener('click', closePopupAddElement);
elementForm.addEventListener('submit', handleElements);

render();
