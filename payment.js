function addPayment(){
    let fname = document.getElementById("fName").value;
    let lname = document.getElementById("lName").value;
    let payment = document.getElementById("payment").value;
    let cardno = document.getElementById("cardNum").value;
    let cvv = document.getElementById("cvv").value;
    const userPay = { fname, lname, payment, cardno, cvv };
    fetch('/addPay', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userPay),
    })
    .then(response => response.text())
    .then(data => {
            document.getElementById('paymentResult').textContent = data;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

//function for searching
function searchData(){
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
