function createHeader(withId = true, withClass = true, withText = true) {
    const helloWorldHeader = document.createElement('h2');
    if (withId) {
        helloWorldHeader.id = 'main-header';
    }
    if (withClass) {
        helloWorldHeader.classList.add('header');
    }
    if (withText) {
        helloWorldHeader.innerText = 'Hello World';
    }

    document.body.appendChild(helloWorldHeader);
}

createHeader();