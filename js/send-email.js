document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const loader = document.getElementById('submit-loader');
    const msgSuccess = document.getElementById('message-success');
    const msgWarning = document.getElementById('message-warning');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            if (loader) loader.style.display = 'block';
            if (msgSuccess) msgSuccess.style.display = 'none';
            if (msgWarning) msgWarning.style.display = 'none';

            // Parameter ini harus sesuai dengan variabel di Template EmailJS Anda
            const templateParams = {
                contactName: document.getElementById('contactName').value,
                contactEmail: document.getElementById('contactEmail').value,
                contactSubject: document.getElementById('contactSubject').value,
                contactMessage: document.getElementById('contactMessage').value,
            };

            // Mengirim Email
            emailjs.send('service_ag9epbi', 'template_mxbctnc', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    if (loader) loader.style.display = 'none';
                    if (msgSuccess) msgSuccess.style.display = 'block';
                    contactForm.reset();
                }, function(error) {
                    console.log('FAILED...', error);
                    if (loader) loader.style.display = 'none';
                    if (msgWarning) {
                        msgWarning.innerText = "Error: " + JSON.stringify(error);
                        msgWarning.style.display = 'block';
                    }
                });
        });
    }
});