document.addEventListener('DOMContentLoaded', function () {
    // Your registration form code here

    document.getElementById('registrationForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const fname = document.getElementById('fname').value;
        const lname = document.getElementById('lname').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const cpassword = document.getElementById('cpassword').value;
        const birthdate = document.getElementById('birthdate').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;

        // Create an object containing all the user registration data
        const userData = {
            fname,
            lname,
            email,
            password,
            cpassword,
            birthdate,
            phone,
            address,
        };

        // Send the user registration data to the server
        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        .then(response => response.text())
        .then(data => {
            document.getElementById('registrationResult').textContent = data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
