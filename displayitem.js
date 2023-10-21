function loadProduct(){
    //retrieve product_id of product clicked from database...
    //then have to send it to server...

    let itemName = document.getElementById("itemName");
    let itemimg = document.getElementById("itemimg");
    let itemprice = document.getElementById("itemprice");
    let descript = document.getElementById("itemdescript");

    let productId = 'placeholder'; //placeholder will change.

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