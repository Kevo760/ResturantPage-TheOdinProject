import {loadHome} from './home';
import loadMenu from './menu';
import loadContact from './contact';



function createNav() {

    const header = document.createElement('header');

    // Resturant Name
    const resturantName = document.createElement('h1');
    resturantName.innerText = 'Taco Loco';

    // Nav selection
    const btnSection = document.createElement('div');
    btnSection.classList.add('header-btns');

        const homeBtn = document.createElement('button');
        homeBtn.classList.add('homeBtn');
        homeBtn.innerText = 'Home';
        homeBtn.addEventListener('click', (e) => {
            if (e.target.classList.contains('active')) return;
            setActive(homeBtn);
            loadHome()
        });
 
    
        const menuBtn = document.createElement('button');
        menuBtn.classList.add('menuBtn');
        menuBtn.innerText = 'Menu';
        menuBtn.addEventListener('click', (e) => {
            if (e.target.classList.contains('active')) return;
            setActive(menuBtn);
            loadMenu();
        });


    
    
        const contactBtn = document.createElement('button');
        contactBtn.classList.add('contactBtn');
        contactBtn.innerText = 'Contact';
        contactBtn.addEventListener('click', (e) => {
            if (e.target.classList.contains('active')) return;
            setActive(contactBtn);
            loadContact();
        });
    
  


        btnSection.appendChild(homeBtn);
        btnSection.appendChild(menuBtn);
        btnSection.appendChild(contactBtn);

        header.appendChild(resturantName);
        header.appendChild(btnSection);

        return header;
};






// sets the active button with active class
function setActive(button) {
    const btns = document.querySelectorAll('button');
    btns.forEach((button) => {
        if(button !== this) {
            button.classList.remove('active');
        };
    
    });
    button.classList.add('active');
};





function loadNav() {
    const bodyPage = document.querySelector('body');
    bodyPage.appendChild(createNav());

    const homeBtn = document.querySelector('.homeBtn');
    
    setActive(homeBtn);
    loadHome();

};

export default loadNav;