import {creat} from './creat.js';
import cards from './cards.js';
const carsGallery = document.getElementById('best-gifts_gallery');

const arrowOne = cards[0];
const arrowTwo = cards[1];
const arrowThree = cards[2];

const newArrowcards = [...arrowOne, ...arrowTwo, ...arrowThree];

window.addEventListener('load', randomsCards);


function shuffle(array) {
  for(let i = array.length - 1; i > 0; i--){
  let j = Math.floor(Math.random() * (i + 1));
  [array[i],array [j]] = [array[j], array[i]];
  };
  return array;
  
};
 
function randomsCards() {
  shuffle(newArrowcards);
  newArrowcards.some(function(el, i) {
    if(i < 4) {
      creat(el, carsGallery);
    }
  })
};













