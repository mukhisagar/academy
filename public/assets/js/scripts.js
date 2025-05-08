document.addEventListener("DOMContentLoaded", function() {
    const registrationForms = document.querySelectorAll('.registration-form');

    registrationForms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            // Here you can add form validation if needed

            // Simulate a successful registration
            alert("Registration successful! You will receive a confirmation email shortly.");
            window.location.href = '/src/pages/confirmation.html'; // Redirect to confirmation page
        });
    });
});