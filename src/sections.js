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
        if (section.images.length > 1) {
            const gallery = createGallery(section.images);
            headerContainer.append(gallery);
        }
    }

    return headerContainer;
}

const createText = (section) => {
    const textContainer = createHTMLElement('div');
    const textHeader = createHTMLElement('h3', section.header);
    textHeader.innerText = section.text;
    textContainer.append(textHeader);

    const text = createHTMLElement('p', section.header, ['text-sm']);
    text.innerText = section.text;
    textContainer.append(text);

    return textContainer;
}

const createGallery = (images) => {
    const imagesContainer = createHTMLElement('div');
    imagesContainer.classList.add('flex', 'border', 'overflow-auto');
    images.forEach(imageUrl => {
        const image = createHTMLElement('img');
        image.src = imageUrl;
        imagesContainer.appendChild(image);
    });

    return imagesContainer;
}

const createContact = (section) => {
    const contact = createHTMLElement('div', 'contact-container');

    Object.keys(section).forEach(key => {
        if (contactCreators.hasOwnProperty(key)) {
            contact.appendChild(contactCreators[key](section[key]));
        }
    });

    return contact;
};

const createEmail = (email) => {
    const element = createHTMLElement('p');
    element.innerText = `Email: ${email}`;
    return element;
};

const createPhone = (phone) => {
    const element = createHTMLElement('p');
    element.innerText = `Phone: ${phone}`;
    return element;
};

const createForm = (form) => {
    const formContainer = createHTMLElement('form');

    form.forEach(input => {
        const inputElement = createHTMLElement('input');
        inputElement.type = input.type;
        inputElement.required = input.required;
        inputElement.placeholder = input.label;

        formContainer.append(inputElement);
    });

    return formContainer;
};

const createLinks = (section) => {
}

const sectionCreators = {
    'header': createHeader,
    'text': createText,
    'gallery': createGallery,
    'contact': createContact,
    'links': createLinks
};

function buildSections(sections) {
    const body = document.getElementById('root');
    sections.forEach(section => {
        body.appendChild(sectionCreators[section.type](section));
    })
}
