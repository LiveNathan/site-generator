const createHTMLElement = (element, id, classes = []) => {
    const htmlElement = document.createElement(element);
    if (id) htmlElement.id = id.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');

    if (typeof classes === 'string') {
        classes = [classes];
    }
    if (classes && classes.length > 0) classes.forEach(cls => htmlElement.classList.add(cls));

    return htmlElement;
}

const createHeader = (section) => {
    const headerContainer = createHTMLElement('div');
    let headerObject;
    if (section.hasOwnProperty('header')) {
        headerObject = section.header;
    } else {
        headerObject = section;
    }
    const header = createHTMLElement('h2', headerObject, ['header', 'text-2xl', 'font-bold']);
    header.innerText = headerObject;
    headerContainer.append(header);

    if (section.hasOwnProperty('images') && Array.isArray(section.images) && section.images.length > 0) {
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
        image.alt = imageUrl;
        imagesContainer.appendChild(image);
    });

    return imagesContainer;
}

const createEmail = (email) => {
    const element = createHTMLElement('a');
    if (typeof email === 'string' && email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        element.href = `mailto:${email}`;
        element.innerText = `Email: ${email}`;
        return element;
    } else {
        alert("Please check your email! It doesn't look correct.")
    }
    throw new Error("Invalid Email");
};

const createPhone = (phone) => {
    const element = createHTMLElement('p');
    if (typeof phone === 'string') {
        element.innerText = `Phone: ${phone}`;
        return element;
    }
    throw new Error("Invalid Phone");
};

const createForm = (form) => {
    const formContainer = createHTMLElement('form', 'contact-form', ['flex', 'flex-col', 'gap-1']);
    formContainer.action = "https://httpbin.org/anything";
    formContainer.method = "post";

    form.forEach(input => {
        if (input.hasOwnProperty('type') && input.hasOwnProperty('label')) {
            const inputIdString = input.label.toLowerCase() + "-input";
            const inputElement = createHTMLElement('input', inputIdString, ['pl-2']);
            inputElement.type = input.type;
            inputElement.required = input.required;
            inputElement.placeholder = input.label;
            inputElement.label = input.label;
            inputElement.name = input.label;

            const label = createHTMLElement('label');
            label.htmlFor = inputIdString;

            formContainer.append(label);
            formContainer.append(inputElement);
        }
    });

    const submitButton = createHTMLElement('input', 'submit', ['bg-blue']);
    submitButton.type = 'submit';
    submitButton.value = 'Submit';

    formContainer.append(submitButton);

    return formContainer;
};

const contactCreators = {
    'header': createHeader,
    'email': createEmail,
    'phone': createPhone,
    'form': createForm,
    'images': createGallery
};

const createContact = (section) => {
    const contactContainer = createHTMLElement('div', 'contact-container');

    Object.entries(section).forEach(([key, value]) => {
        if (key !== "type" && contactCreators.hasOwnProperty(key)) {
            contactContainer.appendChild(contactCreators[key](value));
        } else {
            console.error(`Key ${key} does not exist in contact creators.`);
        }
    });

    return contactContainer;
};

const sectionCreators = {
    'header': createHeader,
    'text': createText,
    'gallery': section => createGallery(section.images),
    'contact': createContact
};

function buildSections(sections) {
    const body = document.getElementById('root');
    body.classList.add('flex', 'flex-col', 'justify-center', 'gap-4');
    sections.forEach(section => {
        body.appendChild(sectionCreators[section.type](section));
    })
}