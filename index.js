function loadData(){
    //fetch post data from server
    fetch('/load', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.text())
    .then(data => {
        for(var i=0;i<data.length;i++){
            document.getElementById('dataTable').innerHTML += '<tr><td>'+data[i].image+'</td><td>'+data[i].name+'</td><td>'+data[i].price+'</td><td>'+data[i].description+'</td></tr>';
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
