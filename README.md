# The Odin Project - Resturant webpack solution

This is a solution to the [PROJECT: RESTAURANT PAGE](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- DOM manipulation
- Create webpages with strict javascript
- Use webpack on project

### Screenshot

![](./images/desktop.JPG)


### Links

- Solution URL: [https://github.com/TheLegend760/ResturantPage-TheOdinProject]
- Live Site URL: [https://resturant-theodinproject.netlify.app/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla JS



### What I learned

I learned that single responsibility functions are necesarry to keep your code clean, allows for easier troubleshoot, and easily change functions without messing
up other functions by just having a function do one specific thing. The createItem function is what I was proud of creating because I can reuse this to create items
on the menu and even change things on the function to add or delete stuff from it.


```js
function createItem(name, description, price, picName) {
    const itemMenu = document.createElement('div');
    itemMenu.classList.add('item');

    const itemTitle = document.createElement('h3');
    itemTitle.innerText = `${name.toUpperCase()} TACO`;

    const itemImage = document.createElement('img');
    itemImage.src = picName;

    const itemDisc = document.createElement('p');
    itemDisc.innerText = description;

    const priceSec = document.createElement('div');
    priceSec.classList.add('price-section');

    const priceText = document.createElement('p');
    priceText.innerText = 'Price:'

    const priceTotal = document.createElement('p');
    priceTotal.innerText = `$${price}`;

    priceSec.appendChild(priceText);
    priceSec.appendChild(priceTotal);


    itemMenu.appendChild(itemTitle);
    itemMenu.appendChild(itemImage);
    itemMenu.appendChild(itemDisc);
    itemMenu.appendChild(priceSec);

return itemMenu;
}
```



### Continued development

I would like to learn more about webpack and see its full potential. I would also like to use more single resposibility functions because I do how it easily cleans up the code. Overall I am slowly getting more conformtable with Javascript, in due time I will get better!

### Useful resources

- [https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page] - This helped me on setting up the webpack to create for the project. I also viewed other peoples code to get some ideas of how I can load each pages on the menu without stacking the different webpages when clicking.



## Author

- GitHub - [TheLegend760](https://github.com/TheLegend760)
- Twitter - [@CodeKevo](https://www.twitter.com/CodeKevo)



