# Resturant_ordering_app

This was a solo project given to me by scrimba, to test my knowledge on vanilla JavaScript. 


[**Deployed site**](https://returant-ordering-app.netlify.app/)

<hr>

## What I leant from this project

This project made me happy since I was finally able to understand the basics of javascript, and was confident I could handle the task at hand

1. I learnt how to render object data from an array to the html page, especially using `.forEach()` and `.map()`
2. I learnt how to use `e.target` for event listeners, expecially for renders I made with javaScript.
3. I started seeing the important of making comments in code, I was able to organize my thoughts with comment in the code.
4. I didn't use much call back functions, but I tried to use so that it would be easier to change code for me.
5. The `delete button`, ahhh yes, I used dataset-id to identify what item to delete.

## Code I am proud of

I am happy with this code cause it made me see the importance of using data-id on elements.

```js
document.addEventListener('click', function (e) {
  addMenuBtn(e.target.id);
  removeItem(e.target.dataset.remove); // This is to get the id of the button
});

function removeItem(item) {
  if (item === '0' || item === '1' || item === '2') {
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
```





 
