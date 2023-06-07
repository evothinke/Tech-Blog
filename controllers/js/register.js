const path = require('path');

const registerForm = document.querySelector('registrationForm');
registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const res = await fetch('/register', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' }
        });
        
        if (res.status === 400) {
            const errorData = await res.json();
            document.getElementById('signupMessage').innerText = errorData.error;
        } else {
            window.location.href = '/login';
        }
    } catch (err) {
        console.log(err);
    }
});


document
    .querySelector('.registrationForm')
    .addEventListener('submit', registerForm);