function createContact() {

};

function createText(text) {
    const textContent = document.createElement('p');
    textContent.innerText = text;
    return textContent
};


function loadContact() {
    const content = document.querySelector('#content');
    content.appendChild(createContact());
};

export default loadContact;