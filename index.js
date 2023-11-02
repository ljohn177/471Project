function loadData(){
    //fetch post data from server
    document.getElementById("dataTable").innerHTML = ""; //clear table
    fetch('/load', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(data => { //fill table
        console.log(data);
        //for(var i=0;i<data.length;i++){
            //document.getElementById('dataTable').innerHTML += '<tr><td>'+data[i].image+'</td><td><a href="displayitem.html">'+data[i].name+'</a></td><td>'+data[i].price+'</td><td>'+data[i].description+'</td></tr>';
        //}
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
//function for searching
function search(){
    let searchString = document.getElementById("search").value; //get string from search box
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
            document.getElementById('dataTable').innerHTML += '<tr><td>'+data[i].image+'</td><td><a href="displayitem.html" onclick = "itemClicked(this)">'+data[i].name+'</a></td><td>'+data[i].price+'</td><td>'+data[i].description+'</td></tr>';
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

//function to determine which item was clicked and display that item on displayitem.html
function itemClicked(element){
    //find element in db based on name
    var name = element.innerHTML;
    fetch('/findId', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(name),
    })
    .then(data => {
        //send product id to display item
        document.getElementById("productid").innerHTML = data.product_id;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
