import {COOKING_SITE} from './index.js';

const createHTMLElement = (element, id, classes = []) => {
    const htmlElement = document.createElement(element);
    if (id) htmlElement.id = id.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
    if (classes && classes.length > 0) classes.forEach(cls => htmlElement.classList.add(cls));
    return htmlElement;
}

const createHeader = (section) => {
    const headerContainer = createHTMLElement('div');
    const header = createHTMLElement('h2', section.header, ['header', 'text-2xl', 'font-bold']);
    header.innerText = section.header;
    headerContainer.append(header);

    if (section.hasOwnProperty('images') && section.images.length > 0) {
        header.style.backgroundImage = `url(${section.images[0]})`;
        if (section.images.length > 1) createGallery(section.images);
    }

    document.body.appendChild(headerContainer);
}

const createText = (section) => {
    const textContainer = createHTMLElement('div');
    const textHeader = createHTMLElement('h3', section.header);
    textHeader.innerText = section.text;
    textContainer.append(textHeader);

    const text = createHTMLElement('p', section.header, ['text-sm']);
    text.innerText = section.text;
    textContainer.append(text);

    document.body.appendChild(textContainer);
}

const createGallery = (images) => {
    const imagesContainer = createHTMLElement('div');
    images.forEach(imageUrl => {
        const image = createHTMLElement('img');
        image.src = imageUrl;
        imagesContainer.appendChild(image);
    });
    document.body.appendChild(imagesContainer);
}

const createContact = (section) => {
    // Logic for preparing Contact section will go here.
}

const createLinks = (section) => {
    // Logic for preparing Links section will go here.
}

const sectionCreators = {
    'header': createHeader,
    'text': createText,
    'gallery': createGallery,
    'contact': createContact,
    'links': createLinks
};

COOKING_SITE.sections.forEach(section => {
    if (sectionCreators[section.type]) {
        sectionCreators[section.type](section);
    }
});