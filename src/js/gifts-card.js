import cards from './cards.js';
import {creat} from './creat.js';

const btnCard = document.getElementById('gifts-galley_btns');
const btnsCard = document.querySelectorAll('.gifts-galley_btn');
const gallery = document.querySelector('.gallery');

btnCard.addEventListener('click', function(element){
  btnsCard.forEach(function(el){
    el.classList.remove('gifts-galley_btn_active');
  });
  if (element.target.classList.contains('gifts-galley_btn')) {
    element.target.classList.add('gifts-galley_btn_active');
  };

  if(element.target.innerText === 'FOR WORK') { 
    galleryDelit(gallery);
    cards[0].some(function(el, i){ 
      creat(el, gallery);
    });
  };
  if(element.target.innerText === 'FOR HEALTH') {
    galleryDelit(gallery);
    cards[1].some(function(el, i){ 
      creat(el, gallery);
    });
  };
  if(element.target.innerText === 'FOR HARMONY') {
    galleryDelit(gallery);
    cards[2].some(function(el, i){ 
      creat(el, gallery);
    });
  };
});

function galleryDelit(el) {
  gallery.innerHTML = '';
};

window.addEventListener('load', cardsGifts);

function cardsGifts () {
  galleryDelit(gallery);
    cards[0].some(function(el, i){ 
      creat(el, gallery);
    });
}


