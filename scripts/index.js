let popup = document.querySelector('.popup');
let buttonOpenPopup = document.querySelector('.profile__button-edit');
let buttonClosePopup = popup.querySelector('.popup__button-close');
let popupForm = popup.querySelector('.popup__form');
let nameInput = popupForm.querySelector('.popup__field_input_name');
let jobInput = popupForm.querySelector('.popup__field_input_job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__description');

function popupOpen () {

    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;

    popup.classList.add('popup_opened');
}

function popupClose () {
    popup.classList.remove('popup_opened');
}

buttonOpenPopup.addEventListener('click', popupOpen);

buttonClosePopup.addEventListener('click', popupClose);

function formSubmitHandler (evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    popupClose();
}

popupForm.addEventListener('submit', formSubmitHandler);