import { createText } from "./home";

function createContact() {
    const contactPage = document.createElement('div');
    contactPage.classList.add('contact');

    // Google map resturant page
    const mapView = document.createElement('iframe');
    mapView.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6709.776267009706!2d-117.24204658616512!3d32.768702705117654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x146519427b49852f!2sBelmont%20Park!5e0!3m2!1sen!2sus!4v1648531371104!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';

    // Phone number and email section
    const directContact = document.createElement('div');
    directContact.classList.add('direct-contact');
    directContact.appendChild(createText('PHONE:'));
    directContact.appendChild(createLink('1-619-000-000', 'tel:1-619-000-0000'))
    directContact.appendChild(createText('EMAIL:'));
    directContact.appendChild(createLink('TACOLOCO@OCOLOCAT.COM', 'mailto:none@example.com'))
    




    contactPage.appendChild(createText('CONTACT US'))
    contactPage.appendChild(mapView);
    contactPage.appendChild(directContact);

    return contactPage;
};

function createLink(text, source) {
    const link = document.createElement('a');
    link.innerText = text;
    link.href = source;

    return link;
}



function loadContact() {
    const content = document.querySelector('#content');
    content.appendChild(createContact());
};

export default loadContact;