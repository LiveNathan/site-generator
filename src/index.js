function buildSite(site) {
    buildSections(site.sections)
}

document.addEventListener("DOMContentLoaded", function () {
    buildSite(PAINTING_SITE);

    const form = document.getElementById("contact-form");
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(form);

        fetch('https://httpbin.org/anything', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => console.log('Success:', result))
            .catch(error => console.error('Error:', error));

    })
})
