document.getElementById('signinform').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
    .then(response => response.text())
    .then(data => {
        if (data === 'User logged in successfully') {
            // Store user login status in localStorage
            localStorage.setItem('user', 'loggedIn');

            // Redirect to the target page after successful login
            window.location.href = "index.html";
        } else {
            document.getElementById('signinresult').textContent = data;
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
