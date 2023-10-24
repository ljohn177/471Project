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
        })
    })
})

function search(){
    let searchString = document.getElementById("search").value;
    document.getElementById("dataTable").innerHTML = ""; //clear previous table
    fetch('/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(searchString),
    })
    .then(data => {
        //fill table with returned rows
        for(var i=0;i<data.length;i++){
            document.getElementById('dataTable').innerHTML += '<tr><td>'+data[i].image+'</td><td><a href="displayitem.html>"'+data[i].name+'</a></td><td>'+data[i].price+'</td><td>'+data[i].description+'</td></tr>';
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
