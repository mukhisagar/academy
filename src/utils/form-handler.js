function handleFormSubmission(event) {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const course = form.course.value;

    if (validateForm(name, email)) {
        // Simulate form submission (e.g., send data to a server)
        console.log('Form submitted:', { name, email, course });

        // Redirect to confirmation page
        window.location.href = '/confirmation.html';
    } else {
        alert('Please fill in all fields correctly.');
    }
}

function validateForm(name, email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return name.trim() !== '' && emailPattern.test(email);
}

document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.querySelector('form');
    if (registrationForm) {
        registrationForm.addEventListener('submit', handleFormSubmission);
    }
});