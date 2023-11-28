function loadProduct(){
    let itemName = document.getElementById("itemName");
    let itemimg = document.getElementById("itemimg");
    let itemprice = document.getElementById("itemprice");
    let descript = document.getElementById("itemdescript");
    //get product id from local storage
    let productId = localStorage.getItem("productId");

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
        itemprice.innerHTML = '$' + data[0].price;
        descript.innerHTML = data[0].description;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

//function for searching
function searchD(){
    var searchString = document.getElementById("search").value; //get string from search box
    searchString = "%" + searchString + "%";
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
            str += '<li class="productpost" onclick="itemClicked(this)"><div class="product"><div class="imagecontainer"><img src="' + data[i].image + '"></div><div class="productdesc"><a href="displayitem.html">' + data[i].name + '</a><br>' + '$' + data[i].price + '<br>' + data[i].description + '</div></div></li>';
        }
        localStorage.setItem("search", str)
        window.location.href = "index.html";
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function buyItem(){
    let name = document.getElementById("itemName").innerHTML;
    let price = document.getElementById("itemprice").innerHTML;
    price = price.replace("$", "");
    price = Number(price);
    let descript = document.getElementById("itemdescript").innerHTML;
    fetch('/findItem', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, price, descript }),
    })
    .then(response => response.json())
    .then(data => {
        let seller = data[0].seller_id;
        fetch('/insertItem', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ seller, price, name }),
        })
        .then(response => response.text())
        .then(data => {
            //return that item has been bought
            document.getElementById("buyResult").textContent = data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
}