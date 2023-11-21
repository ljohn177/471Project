function createPost(){
    const itemName = document.getElementById('itemname').value;
    const price = document.getElementById('price').value;
    const descript = document.getElementById('description').value;
    const img = document.getElementById('imageupload').value;
    const file = img.replace("C:\\fakepath\\", "images/");

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
}

function searchB(){
    var searchString = document.getElementById("searchText").value;
    searchString = "%" + searchString + "%";
    fetch('/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({searchString}),
    })
    .then(response => response.json())
    .then(data => {
        var str = "";
        //fill table with returned rows
        for(var i=0;i<data.length;i++){
            str += '<tr><td>'+data[i].image+'</td><td><a href="displayitem.html" onclick = "itemClicked(this)">'+data[i].name+'</a></td><td>'+data[i].price+'</td><td>'+data[i].description+'</td></tr>';
        }
        localStorage.setItem("search", str);
        window.location.href = "index.html";
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
