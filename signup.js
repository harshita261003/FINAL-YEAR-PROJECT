document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Save user credentials to localStorage (for simplicity)
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    // Redirect to login page
    window.location.href = 'login.html';
});
