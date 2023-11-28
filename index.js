function loadData(){
    if(localStorage.getItem("search") == "null"){
        //fetch post data from server
        document.getElementById("dataTable").innerHTML = ""; //clear table
        fetch('/load', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            var str ="";
for (var i = 0; i < data.length; i++) {
    str += '<li class="productpost" onclick="itemClicked(this)"><div class="product"><div class="imagecontainer"><img src="' + data[i].image + '"></div><div class="productdesc"><a href="displayitem.html">' + data[i].name + '</a><br>' + '$' + data[i].price + '<br>' + data[i].description + '</div></div></li>';
}

            document.getElementById("dataTable").innerHTML = str;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }else{
        document.getElementById("dataTable").innerHTML = "";
        document.getElementById("dataTable").innerHTML = localStorage.getItem("search");
        localStorage.setItem("search", "null");
    } 
}
//function for searching
function searchDB(){
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
            str += '<li class = "productpost"><div class = "product"><div class = "imagecontainer"><img src=\"' +data[i].image+ '\"></div><div class = "productdesc"><a href="displayitem.html" onclick = "itemClicked(this)">'+data[i].name+'</a><br>'+ '$' + data[i].price+'<br>'+data[i].description+'</div></li>';
        }
        document.getElementById("dataTable").innerHTML = ""; //clear previous table
        document.getElementById("dataTable").innerHTML = str;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

//function to determine which item was clicked and display that item on displayitem.html
function itemClicked(element) {
    //find element in db based on name
    var name = element.querySelector('.productdesc a').innerHTML;
    fetch('/findId', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
    })
        .then(response => response.json())
        .then(data => {
            //store product id in local storage
            localStorage.setItem("productId", data[0].product_id);
            //redirect to displayitem.html
            window.location.href = "displayitem.html";
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

