import { COOKING_SITE } from './index.js';
function createHeader() {
    const header = document.createElement('h2');
    // header.id = 'main-header';
    // header.classList.add('header');
    header.innerText = 'Hello World';
    document.body.appendChild(header);
}

function createText() {
    const text = document.createElement('p');
    // text.id = 'main-header';
    // text.classList.add('header');
    text.innerText = 'Hello World';
    document.body.appendChild(text);
}

function createGallery() {
    const gallery = document.createElement('img');
    // gallery.id = 'main-header';
    // gallery.classList.add('header');
    // gallery.innerText = 'Hello World';
    document.body.appendChild(gallery);
}

function createContact() {
    const contact = document.createElement('p');
    // contact.id = 'main-header';
    // contact.classList.add('header');
    contact.innerText = 'Hello World';
    document.body.appendChild(contact);
}

function createLinks() {
    const links = document.createElement('a');
    // links.id = 'main-header';
    // links.classList.add('header');
    links.innerText = 'Hello World';
    document.body.appendChild(links);
}

COOKING_SITE.sections.forEach(section => {
    switch (section.type) {
        case 'header':
            createHeader();
            break;
        case 'text':
            createText();
            break;
        case 'gallery':
            createGallery();
            break;
        case 'contact':
            createContact();
            break;
        case 'links':
            createLinks();
            break;
    }
})