const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const session = require('express-session');

// Create a connection to your MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root', // change the password
  database: 'epay',
});

// Middleware for handling JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve your HTML files
app.use(express.static(__dirname));

// Session Configuration
app.use(
  session({
    secret: 'your_session_secret', // Change this to a secure random string
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Change this to true if using HTTPS
  })
);

// Handle user registration   **WORKING
app.post('/register', (req, res) => {

  const { fname, lname, email, password, birthdate, phone, address } = req.body;

  // Derive the 'name' from 'fname' and 'lname'
  const name = `${fname} ${lname}`;

  // Split 'birthdate' into 'birthday', 'birthmonth', and 'birthyear'
  const [birth_year, birth_month, birth_day] = birthdate.split('-');

  // Check if the email already exists in the database
  connection.query('SELECT * FROM user WHERE email = ?', [email], (error, results) => {
    if (error) {
      console.error('Error checking user existence:', error);
      return res.status(500).send('Server error');
    }

    if (results.length > 0) {
      return res.status(400).send('Email already registered');
    }

// Insert user data into the database
connection.query(
  'INSERT INTO user (name, email, password, birth_day, birth_month, birth_year, phone_number, address) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
  [name, email, password, birth_day, birth_month, birth_year, phone, address],
  (error, result) => {
    if (error) {
      console.error('Error inserting user data:', error);
      return res.status(500).send('Server error');
    }

  }
);

  });
});

// Handle user login    **WORKING
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Check if the email and password match in the 'account' table
  connection.query('SELECT * FROM user WHERE email = ? AND password = ?', [email, password], (error, results) => {
    if (error) {
      console.error('Error checking user credentials:', error);
      return res.status(500).send('Server error');
    }

    if (results.length === 0) {
      return res.status(401).send('Invalid credentials');
    }

    // Store the user's ID in the session
    req.session.userId = results[0].id;

    res.send('User logged in successfully');
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//insert data when creating post into product table **WORKING
app.post('/createPost', (req, res) => {
  const { itemName, file, descript, price } = req.body;
  let userId = req.session.userId;
  connection.query('INSERT INTO product (name, image, description, price, seller_id) VALUES (?, ?, ?, ?, ?)',
  [itemName, file, descript, price, userId], 
  (error, result) => {
    if (error) {
      console.error('Error inserting post data:', error);
      return res.status(500).send('Server error');
    }
    res.send('Post created successfully');
    });
});

//load post data for table  **WORKING BESIDES IMAGE
app.post('/load', (req, res) =>{
  connection.query("SELECT name, image, description, price FROM product WHERE is_sold = 0",
  (error, result) =>{
    if(error){
      console.error('Error retrieving data:', error);
      return res.status(500).send('Server error');
    }else{
      res.send(result);
    }
  })
})

//add payment data to payment table  **WORKING
app.post('/addPay', (req,res) =>{
  const {fname, lname, payment, cardno, cvv } = req.body;
  const name = `${fname} ${lname}`;
  let userId = req.session.userId;
  connection.query('INSERT INTO paymentinfo(user_id, name, cardtype, card_no, cvv) VALUES (?, ?, ?, ?, ?)', [userId, name, payment, cardno, cvv],
  (error, result) =>{
    if (error) {
      console.error('Error adding payment:', error);
      return res.status(500).send('Server error');
    }else{
      res.send('Payment added');
    }
  })
})

//load an item when clicked on table  **WORKING
app.post('/loadItem', (req, res) =>{
  const {productId} = req.body;
  connection.query('SELECT name, image, description, price FROM product WHERE product_id = ?', [productId],
  (error, result) =>{
    if(error){
      console.error('Error adding payment:', error);
      return res.status(500).send('Server error');
    }else{
      res.send(result);
    }
  })
})

//search functionality  **WORKING
app.post('/search', (req, res) =>{
  const {searchString} = req.body;
  connection.query('SELECT name, image, description, price FROM product WHERE name LIKE ? AND is_sold = 0', [searchString],
  (error, result)=>{
    if(error){
      return res.status(500).send('Server error');
    }else{
      res.send(result);
    }
  })
})

//get id of clicked product   **WORKING
app.post('/findId', (req, res) =>{
  const {name} = req.body;
  connection.query('SELECT product_id FROM product WHERE name = ?', [name],
  (error, result)=>{
    if(error){
      return res.status(500).send('Server error');
    }else{
      res.send(result);
    }
  })
})

//find seller id of an item  **WORKING
app.post('/findItem', (req, res) =>{
  const {name, price, descript} = req.body;
  connection.query('SELECT seller_id FROM product WHERE name = ? AND description = ? AND price = ?', [name, descript, price],
  (error, result)=>{
    if(error){
      return res.status(500).send('Server error');
    }else{
      res.send(result);
    }
  })
})

//insert item into payment table, and update product as sold **WORKING
app.post('/insertItem', (req, res) =>{
  let buyer = req.session.userId;
  const {seller, price, name} = req.body;
  connection.query('INSERT INTO payment(receiver_id, sender_id, amount) VALUES (?, ?, ?)', [seller, buyer, price],
  (error, result) => {
    if(error){
      return res.status(500).send('Server Error');
    }else{
      connection.query('UPDATE product SET is_sold = 1 WHERE seller_id = ? AND name = ?', [seller, name],
      (error,result) => {
        if(error){
         return res.status(500).send('Server error');
        }else{
          res.send("Successfully Bought Item");
        }
      })
    }
  })
})