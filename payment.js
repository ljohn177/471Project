function addPayment(){
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    fname = fname + " " + lname;
    let payment = document.getElementById("payment").value;
    let cardno = document.getElementById("cardNum").value;
    let cvv = document.getElementById("cvv").value;
    fetch('/addPay', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fname, payment, cardno, cvv }),
    })
    .then(response => response.text())
    .then(data => {
            document.getElementById('paymentResult').textContent = data;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}