function loadProduct(){
    let itemName = document.getElementById("itemName");
    let itemimg = document.getElementById("itemimg");
    let itemprice = document.getElementById("itemprice");
    let descript = document.getElementById("itemdescript");
    //get product id from local storage
    let productId = localStorage.getItem("productId");
    alert(productId);
    //fetch post data from server
    fetch('/loadItem', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId }),
    })
    .then(response => response.json())
    .then(data => {
        itemName.innerHTML = data[0].name;
        itemimg.src = data[0].image;
        itemprice.innerHTML = data[0].price;
        descript.innerHTML = data[0].description;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

//function for searching
function searchDB(){
    var searchString = document.getElementById("search").value; //get string from search box
    searchString = "%" + searchString + "%";
    window.location.href = "index.html";
    fetch('/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ searchString }),
    })
    .then(response => response.json())
    .then(data => {
        var str = "";
        //fill table with returned rows
        for(var i=0;i<data.length;i++){
            str += '<tr><td>'+data[i].image+'</td><td><a href="displayitem.html" onclick = "itemClicked(this)">'+data[i].name+'</a></td><td>'+data[i].price+'</td><td>'+data[i].description+'</td></tr>';
        }
        document.getElementById("dataTable").innerHTML = ""; //clear previous table
        document.getElementById("dataTable").innerHTML = str;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}