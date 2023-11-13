import { menuArray } from './data.js';

const main = document.querySelector('main');
const actualOrder = document.querySelector('.actual-order');
const totalPrice = document.getElementById('total-price');
const placedOrder = document.querySelector('.place-order');
const thanksMessage = document.querySelector('.thanks');
const orderedItem = [];

const completeOrderBtn = document.getElementById('complete-order');

// Render Menu to the web app

menuArray.forEach((item) => {
  main.innerHTML += `
        <section class="items-container">
        <div class="main-item">
        <p class="icon">${item.emoji}</p>
        <div class="item-detail">
            <p class="item">${item.name}</p>
            <p class="item-ingredient">${item.ingredients}</p>
            <p class="item-price">${item.price}</p>
        </div>
        </div>
        <button class="add-item" id='${item.id}'>+</button>
        </section> 
    `;
});

// When you click the items button

document.addEventListener('click', function (e) {
  addMenuBtn(e.target.id);
  removeItem(e.target.dataset.remove);
});

function addMenuBtn(itemId) {
  let order = '';
  if (itemId === '0' || itemId === '1' || itemId === '2') {
    order = menuArray.filter((item) => {
      return item.id === parseInt(itemId);
    })[0];
  } else {
    return;
  }
  addItemsToCart(order);
}

function addItemsToCart(itemOrdered) {
  if (!orderedItem.includes(itemOrdered)) {
    orderedItem.push(itemOrdered);
  }
  renderItem(orderedItem);
}

function renderItem(items) {
  actualOrder.innerHTML = '';
  let sum = 0;
  orderedItem.forEach((item) => {
    actualOrder.innerHTML += `
    <div class="order-placed">
    <div class="order-item">
      <p class="item-ordered">${item.name}</p>
      <button class="remove-btn" data-remove='${item.id}'>remove</button>
    </div>
    <p class="order-price">$${item.price}</p>
  </div>
    `;
    sum += item.price;
  });
  totalPrice.innerText = sum;
}

function removeItem(item) {
  if (item === '0' || item === '1' || item === '2') {
    // console.log(item);
    let itemToBeDeleted = orderedItem.filter((e) => {
      return e.id === parseInt(item);
    })[0];
    let itemIndex = orderedItem.indexOf(itemToBeDeleted);

    if (itemIndex > -1) {
      orderedItem.splice(itemIndex, 1);
    }
    renderItem(orderedItem);
  } else {
    return;
  }
}

// When you Click to complete order, and to pay
const orderForm = document.getElementById('order-form');

completeOrderBtn.addEventListener('click', checkTotalBalance);

function checkTotalBalance() {
  let currentPrice = parseInt(totalPrice.innerText);
  if (currentPrice > 0) {
    orderForm.classList.remove('ready-to-pay');
  }
}

// This const is here because when at the top,
// e.preventDefault() does not work
const paymentDetails = document.getElementById('payment-details');
paymentDetails.addEventListener('submit', (e) => {
  e.preventDefault();
  placedOrder.classList.add('ready-to-pay');
  orderForm.classList.add('ready-to-pay');
  thanksMessage.classList.remove('ready-to-pay');
  orderedItem.splice(0, orderedItem.length);
});
