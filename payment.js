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