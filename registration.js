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

        // Add a validation to check if the password and confirm password match
        if (password !== cpassword) {
            document.getElementById('registrationResult').textContent = "Passwords do not match";
            return; // Do not proceed with the registration
        }

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
            // Redirect to the target page after successful login
            window.location.href = "signin.html";
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
