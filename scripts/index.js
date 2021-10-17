let popup = document.querySelector('.popup');
let buttonOpenPopup = document.querySelector('.profile__button-edit');
let buttonClosePopup = popup.querySelector('.popup__button-close');
let popupForm = popup.querySelector('.popup__form');
let nameInput = popupForm.querySelector('.popup__field_name');
let jobInput = popupForm.querySelector('.popup__field_job');
let saveButton = popup.querySelector('.popup__button');

buttonOpenPopup.addEventListener('click', function() {
    popup.classList.add('popup_opened');
});

buttonClosePopup.addEventListener('click', function() {
    popup.classList.remove('popup_opened');
});

saveButton.addEventListener('click', function() {
    popup.classList.remove('popup_opened');
});

function formSubmitHandler (evt) {
    evt.preventDefault();

    let profileName = document.querySelector('.profile__name');
    let profileJob = document.querySelector('.profile__description');

    profileName.textContent = `${nameInput.value}`;
    profileJob.textContent = `${jobInput.value}`;
}

popupForm.addEventListener('submit', formSubmitHandler);