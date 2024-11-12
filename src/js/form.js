const formClose = document.getElementById('form__close');
const form = document.getElementById('form');

const giftsItemn = document.querySelectorAll('.best-gifts_itemn');


formClose.addEventListener('click', function(){
  form.classList.remove('form__active');
});

//giftsItemn.forEach(function(el){
  //el.addEventListener('click', function(){
    //form.classList.add('form__active');
  //})
//});

document.addEventListener('click', function(el){
  let click = el.target;

  if(click.classList.contains('form')) {
    form.classList.remove('form__active');
  }
})