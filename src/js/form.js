import cards from './cards.js';

const formClose = document.getElementById('form__close');
const form = document.getElementById('form');

const formImg = document.getElementById('form__img');
const formTitle = document.getElementById('form__title');
const bestGiftsText = document.getElementById('best-gifts_text');
const formTextDesk = document.getElementById('form-text-desk');
const formLive = document.getElementById('form__live');
const formCreat = document.getElementById('form__creat');
const formLove = document.getElementById('form__love');
const formDream = document.getElementById('form__dream');

//form close start
formClose.addEventListener('click', function(){
  form.classList.remove('form__active');
});

document.addEventListener('click', function(el){
  let click = el.target;

  if(click.classList.contains('form')) {
    form.classList.remove('form__active');
  }
});
//form close end

window.addEventListener('click', function(el){
  const btnCard = el.target.dataset.myAttribute;
  const dataSetId = el.target.dataset.id;
  
  if(btnCard) {
    form.classList.add('form__active');

    if (btnCard === 'For Work') {
      formTitle.classList.add('card_title_work');
      creatForm (cards[0], dataSetId);
    };

    if (btnCard === 'For Health') {
      formTitle.classList.add('card_title_health');
      creatForm (cards[1], dataSetId);
    };
 
    if (btnCard === 'For Harmony') {
      formTitle.classList.add('card_title_harmony');
      creatForm (cards[2], dataSetId);
    };
  }
});

function creatForm(e, dataSetId) {
  let cardId = e.find(el => el.id === dataSetId);
  
  formImg.src = cardId.img;
  formTitle.innerText = cardId.category;
  bestGiftsText.innerText = cardId.name;
  formTextDesk.innerText = cardId.description;
  formLive.innerText = cardId.superpowers.live;
  formCreat.innerText = cardId.superpowers.create;
  formLove.innerText = cardId.superpowers.love;
  formDream.innerText = cardId.superpowers.dream;
}

