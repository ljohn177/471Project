function loadProduct(){
    let itemName = document.getElementById("itemName");
    let itemimg = document.getElementById("itemimg");
    let itemprice = document.getElementById("itemprice");
    let descript = document.getElementById("itemdescript");

    let productId = document.getElementById("productid").innerHTML;

    //fetch post data from server
    fetch('/loadItem', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId }),
    })
    .then(data => {
        itemName.innerHTML = data[0].name;
        itemimg.innerHTML = data[0].image;
        itemprice.innerHTML = data[0].price;
        descript.innerHTML = data[0].description;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

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