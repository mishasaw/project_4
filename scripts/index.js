const cardEditModal = document.querySelector('.popup_type_edit');
const cardAddModal = document.querySelector('.popup_type_add-card');
const imageModal = document.querySelector('.popup_type_image');
const buttonEditProfile = document.querySelector('.profile__info-edit-button');
const buttonCloseEditModal = cardEditModal.querySelector('.popup__close');
const buttonAddCard = document.querySelector('.profile__add-button');
const buttonCloseAddCardModal = cardAddModal.querySelector('.popup__close');
const formEdit = cardEditModal.querySelector('.popup__form');
const formAddCard = cardAddModal.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__name');
const jobInput = document.querySelector('.popup__job');
const nameCardInput = document.querySelector('.popup__name_card');
const jobCardInput = document.querySelector('.popup__job_card');
const nameInputextra = document.querySelector('.profile__info-title');
const jobInputextra = document.querySelector('.profile__info-subtitle');
const imageCloseButton = imageModal.querySelector('.popup__close');
const section = document.querySelector('.elements');
const cardTemplate = document.querySelector('.card-template').content;
const popupImage = imageModal.querySelector('.popup__image');
const popupText = imageModal.querySelector('.popup__image-text');
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

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function submitFormHandler (evt) {
    evt.preventDefault();
    nameInputextra.textContent = nameInput.value;
    jobInputextra.textContent = jobInput.value;
    closePopup(cardEditModal);
    
}

function addCardFormSubmit (evt) {
    evt.preventDefault();
    const nameValue = nameCardInput.value;
    const linkValue = jobCardInput.value;
    const obj = {
    name: nameValue,
    link: linkValue
}
massiveCard (obj)
    closePopup(cardAddModal);
    formAddCard.reset();
}

buttonEditProfile.addEventListener('click', () => {
  openPopup(cardEditModal)
  nameInput.value =  nameInputextra.textContent;
  jobInput.value =  jobInputextra.textContent;
});

buttonCloseEditModal.addEventListener('click', ()=>
  closePopup(cardEditModal)
);

buttonAddCard.addEventListener('click', () =>
  openPopup(cardAddModal)
);

buttonCloseAddCardModal.addEventListener('click', ()=>
  closePopup(cardAddModal)
);


formEdit.addEventListener('submit', submitFormHandler);
formAddCard.addEventListener('submit', addCardFormSubmit);

const massiveCard = (element) => {
    const card = createCard (element);
    section.prepend (card)
  }
  
  initialCards.forEach (massiveCard);

function deleteHandler(e) {
  e.target.closest('.element').remove()
}

  function createCard(cardData) {

    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector('.element__image');
    const cardTitle = cardElement.querySelector('.element__mask-text');
    const buttonDelete = cardElement.querySelector('.element__delete');
    const buttonLike = cardElement.querySelector('.element__mask-like');
    const imageButton = cardElement.querySelector('.element__image');
    

    cardTitle.textContent = cardData.name;
    cardImage.style.backgroundImage = `url(${cardData.link})`;
    
    function likeHandler() {
      buttonLike.classList.toggle('element__mask-like_active');
    }

    buttonDelete.addEventListener('click', deleteHandler);
    buttonLike.addEventListener('click', likeHandler);

    imageButton.addEventListener('click', ()=>{
      openPopup(imageModal);
      popupImage.src = cardData.link;
      popupImage.alt = cardData.name;
      popupText.textContent = cardData.name;
    })
    

    return cardElement
    
      }
      imageCloseButton.addEventListener('click', ()=>
      closePopup(imageModal));
    



