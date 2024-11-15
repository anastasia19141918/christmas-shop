const slaiderPref =  document.getElementById('slaider__pref');
const slaiderNext =  document.getElementById('slaider__next');

const slaiderGallery = document.getElementById('slaider__gallery');
const slaids = document.getElementById('slaids');
const cards = document.querySelectorAll('.slaider__item');
const itemn = document.querySelector('.slaider__item');

const cardsnewArraw = Array.from(cards);
const slaiderCount = cardsnewArraw.length;


let slaiderIndex = 0;

slaiderNext.addEventListener('click', function(){
  slaiderIndex = (slaiderIndex + 1) % slaiderCount;
  slaider();
  
});

slaiderPref.addEventListener('click', function(){
  slaiderIndex = (slaiderIndex - 1 + slaiderCount) % slaiderCount;
  slaider();
})

function slaider() {
  if(window.innerWidth > '767') {
    const widthSlaider = ((slaids.clientWidth - '400') / 4);
    const slaiderOffset = -slaiderIndex * widthSlaider;
    slaiderGallery.style.transform = `translateX(${slaiderOffset}px)`;
  }
  
  if (window.innerWidth < '767') {
    const widthSlaider = '430';
    const slaiderOffset = -slaiderIndex * widthSlaider;
    slaiderGallery.style.transform = `translateX(${slaiderOffset}px)`;
  };
  if (window.innerWidth < '380') {
    const widthSlaider = '395';
    const slaiderOffset = -slaiderIndex * widthSlaider;
    slaiderGallery.style.transform = `translateX(${slaiderOffset}px)`;
  };
};




