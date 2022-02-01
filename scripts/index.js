const popupOpenButton = document.querySelector('.profile__info-edit-button');
const popupCloseButton = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__name');
const jobInput = document.querySelector('.popup__job');
const nameInputextra = document.querySelector('.profile__info-title');
const jobInputextra = document.querySelector('.profile__info-subtitle');

function openPopup() {
    popup.classList.add('popup_opened');
    nameInput.value =  nameInputextra.textContent;
    jobInput.value =  jobInputextra.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}





function formSubmitHandler (evt) {
    evt.preventDefault();
    nameInputextra.textContent = nameInput.value;
    jobInputextra.textContent = jobInput.value;
    closePopup();
    
}
popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
