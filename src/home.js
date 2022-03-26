import Tacoimage from './images/taco.gif';

function createHome() {
    const homePage = document.createElement('div');
    homePage.classList.add('home');


    const tacoImage = new Image();
    tacoImage.src = Tacoimage;

    homePage.appendChild(createText('Welcome to Taco Loco!'));
    homePage.appendChild(tacoImage);
    homePage.appendChild(createText('One bite with our taco will make a sane person turn loco for more!'));
    homePage.appendChild(createText('We know your HANGRY, order now to start feasting!'));
    
    return homePage;
};

function createText(text) {
    const textContent = document.createElement('p');
    textContent.innerText = text;
    return textContent
};

function loadHome() {
    const content = document.querySelector('#content');
    content.appendChild(createHome());

}

export default loadHome;