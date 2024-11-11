const btnCard = document.getElementById('gifts-galley_btns');
const btnsCard = document.querySelectorAll('.gifts-galley_btn');

btnCard.addEventListener('click', function(element){
  btnsCard.forEach(function(el){
    el.classList.remove('gifts-galley_btn_active');
  });
  if(element.target.classList.contains('gifts-galley_btn')) {
    element.target.classList.add('gifts-galley_btn_active');
  }
})