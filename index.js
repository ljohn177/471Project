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
        document.getElementById('dataTable').innerHTML += data;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
