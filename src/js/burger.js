const burger = document.getElementById('burger');
const headerNav = document.getElementById('header__nav');
const headerItemn = document.querySelectorAll('.header__itemn')

burger.addEventListener('click', function(){
  burger.classList.toggle('burger__active');
  headerNav.classList.toggle('header__nav__active');
});

headerItemn.forEach(function(el){
  el.addEventListener('click', function(){
    burger.classList.remove('burger__active');
    headerNav.classList.remove('header__nav__active');
  })
})