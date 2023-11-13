import { menuArray } from './data.js';

const main = document.querySelector('main');

// Render Menu to the web app

menuArray.forEach((item) => {
  main.innerHTML += `
        <div class="items-container">
        <div class="main-item">
        <p class="icon">${item.emoji}</p>
        <div class="item-detail">
            <p class="item">${item.name}</p>
            <p class="item-ingredient">${item.ingredients}</p>
            <p class="item-price">${item.price}</p>
        </div>
        </div>
        <button class="add-item" id='${item.id}'>+</button>
        </div> 
    `;
});

document.addEventListener('click', function (e) {
  let order = '';
  if (e.target.id === '0' || e.target.id === '1' || e.target.id === '2') {
    order = menuArray.filter(function (item) {
      return item.id === parseInt(e.target.id);
    })[0];
  }
  console.log(order.name);
});
