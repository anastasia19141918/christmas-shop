export function creat(el, index) {
    const div = document.createElement('div');
    div.classList.add('best-gifts_itemn');
    
    const img = document.createElement('img');
    img.classList.add('best-gifts_img');
    img.alt = el.category;
    img.src = el.img;
    img.dataset.id = el.id;

    
    const divDesk = document.createElement('div');
    divDesk.classList.add('best-gifts_desk');

    const h4 = document.createElement('h4');
    h4.classList.add('card_title');
    h4.innerText = el.category;

    if (h4.innerText === 'For Work') {
      h4.classList.add('card_title_work');
      img.dataset.myAttribute = 'For Work';
    };

    if (h4.innerText === 'For Health') {
      h4.classList.add('card_title_health');
      img.dataset.myAttribute = 'For Health';
    };

    if (h4.innerText === 'For Harmony') {
      h4.classList.add('card_title_harmony');
      img.dataset.myAttribute = 'For Harmony';
    };

    const h3 = document.createElement('h3');
    h3.classList.add('best-gifts_text');
    h3.innerText = el.name;

   

    index.appendChild(div);
    div.appendChild(img);
    div.appendChild(divDesk);
    divDesk.appendChild(h4);
    divDesk.appendChild(h3);
};

