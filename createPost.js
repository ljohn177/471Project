document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('createpost').addEventListener('submit', function (event) {
        event.preventDefault();

        const itemName = document.getElementById('itemname').value;
        const price = document.getElementById('price').value;
        const descript = document.getElementById('description').value;
        const file = document.getElementById('imageupload').value;

        // Create an object containing all the post data
        const postData = {
            itemName,
            file,
            descript,
            price,
        };

        // Send the post data to the server
        fetch('/createPost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        })
        .then(response => response.text())
        .then(data => {
            document.getElementById('createPostResult').textContent = data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
