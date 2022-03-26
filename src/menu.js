import asada from './images/asada.jpg';
import chicken from './images/chicken.jpg';
import fish from './images/fish.jpg';
import shrimp from './images/shrimp.jpg';

// Puts all items together on menu
function createMenu() {
    const menuPage = document.createElement('div');
    menuPage.classList.add('menu');
    const menuHeader = document.createElement('h1');
    menuHeader.innerText = 'Loco Menu'


    const itemSec = document.createElement('div');
    itemSec.classList.add('item-section');

    itemSec.appendChild(createItem('Carne Asada', 'Juicy well seasoned steak which comes with your choice of toppings', '3.00', asada));
    itemSec.appendChild(createItem('Chicken', 'Savory chipotle chicken which comes with your choice of toppings', '3.00', chicken));
    itemSec.appendChild(createItem('Fish', 'Cruncy and melts in your mouth COD fish taco comes with cabbage, cilantro, and tartor sauce', '3.00', fish));
    itemSec.appendChild(createItem('shrimp', 'Shrimp taco added with pico de gallo, pinapple and chipotle sauce', '3.00', shrimp));


    menuPage.appendChild(menuHeader);
    menuPage.appendChild(itemSec);


    return menuPage
}

// Creates the Item
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




// Creates a menu load
function loadMenu() {
    const content = document.querySelector('#content');
    content.appendChild(createMenu());
}

export default loadMenu;