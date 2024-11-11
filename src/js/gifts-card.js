import cards from './cards.js';
import {creat} from './random.js';

const btnCard = document.getElementById('gifts-galley_btns');
const btnsCard = document.querySelectorAll('.gifts-galley_btn');
const gallery =  document.getElementById('gallery');

btnCard.addEventListener('click', function(element){
  btnsCard.forEach(function(el){
    el.classList.remove('gifts-galley_btn_active');
  });
  if (element.target.classList.contains('gifts-galley_btn')) {
    element.target.classList.add('gifts-galley_btn_active');
  };

  if(element.target.innerText === 'FOR WORK') {
    creat(cards[0]);
  };
  if(element.target.innerText === 'FOR HEALTH') {
    creat(cards[1]);
  };
  if(element.target.innerText === 'FOR HARMONY') {
    creat(cards[2]);
  };
  if(element.target.innerText === 'ALL') {
    creat(cards[3]);
  };
});


