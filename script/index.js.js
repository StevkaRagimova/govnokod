$(".popup").on('click', function() {
    $(".popup__container").addClass('model-open');
  }); 
  $(".popup__button-close").click(function(){
    $(".popup__container").removeClass('popup__container');
  });
  



  const clickBtn = document.getElementById("clickBtn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");

clickBtn.addEventListener('click', ()=>{
    popup.style.display = 'block';
});
closeBtn.addEventListener('click', ()=>{
    popup.style.display = 'none';
});
popup.addEventListener('click', ()=>{
    popup.style.display = 'none';
});




let profileEditButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupButtonClose = document.querySelector('.popup__button-close');
let popupForm = document.querySelector('.form');
let profileName document.querySelector('.profile__name');
let formInputName = document.querySelector('.form__input_name');
let formInputWorkplace = document.querySelector('.profile__workplace');
let formInputWorkplace = ('.form__input_workplace');

function


