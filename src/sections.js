import { COOKING_SITE } from './index.js';
function createHeader(section) {
    const header = document.createElement('h2');
    const headerText = section.header;
    header.innerText = headerText;
    header.id = headerText.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '')  // Replace white space with dash.
    header.classList.add('header text-2xl font-bold');

    const imagesContainer = document.createElement('div');
    imagesContainer.classList.add('');
    section.images.forEach(imageUrl => {
        const image = document.createElement('img');
        image.src = imageUrl;
        imagesContainer.appendChild(image);
    })

    document.body.appendChild(header);
}

function createText(section) {
    const text = document.createElement('p');
    // text.id = 'main-header';
    // text.classList.add('header');
    text.innerText = 'Hello World';
    document.body.appendChild(text);
}

function createGallery(section) {
    const gallery = document.createElement('img');
    // gallery.id = 'main-header';
    // gallery.classList.add('header');
    // gallery.innerText = 'Hello World';
    document.body.appendChild(gallery);
}

function createContact(section) {
    const contact = document.createElement('p');
    // contact.id = 'main-header';
    // contact.classList.add('header');
    contact.innerText = 'Hello World';
    document.body.appendChild(contact);
}

function createLinks(section) {
    const links = document.createElement('a');
    // links.id = 'main-header';
    // links.classList.add('header');
    links.innerText = 'Hello World';
    document.body.appendChild(links);
}

COOKING_SITE.sections.forEach(section => {
    switch (section.type) {
        case 'header':
            createHeader(section);
            break;
        case 'text':
            createText(section);
            break;
        case 'gallery':
            createGallery(section);
            break;
        case 'contact':
            createContact(section);
            break;
        case 'links':
            createLinks(section);
            break;
    }
})