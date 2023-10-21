const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Create a connection to your MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'epay',
});

// Middleware for handling JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve your HTML files
app.use(express.static(__dirname));

// Handle user registration
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
  'INSERT INTO user (name, email, birth_day, birth_month, birth_year, phone_number, address) VALUES (?, ?, ?, ?, ?, ?, ?)',
  [name, email, birth_day, birth_month, birth_year, phone, address],
  (error, result) => {
    if (error) {
      console.error('Error inserting user data:', error);
      return res.status(500).send('Server error');
    }

    // Insert account data into the 'account' table
    const user_id = result.insertId; // Get the ID of the newly inserted user
    connection.query(
      'INSERT INTO account (user_id, username, password) VALUES (?, ?, ?)',
      [user_id, email, password], // Use the user_id from above
      (error) => {
        if (error) {
          console.error('Error inserting account data:', error);
          return res.status(500).send('Server error');
        }
        res.send('User registered successfully');
      }
    );
  }
);

  });
});

// Handle user login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Check if the email and password match in the 'account' table
  connection.query('SELECT * FROM account WHERE username = ? AND password = ?', [email, password], (error, results) => {
    if (error) {
      console.error('Error checking user credentials:', error);
      return res.status(500).send('Server error');
    }

    if (results.length === 0) {
      return res.status(401).send('Invalid credentials');
    }

    res.send('User logged in successfully');
  });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//insert data when creating post into product table
app.post('/createPost', (req, res) => {
  const { itemName, file, descript, price } = req.body;
  connection.query('INSERT INTO product (name, image, description, price) VALUES (?, ?, ?, ?)',
  [itemName, file, descript, price], 
  (error, result) => {
    if (error) {
      console.error('Error inserting post data:', error);
      return res.status(500).send('Server error');
    }
    res.send('Post created successfully');
    });
});

//load post data for table
app.post('/load', (req, res) =>{
  connection.query("SELECT name, image, description, price FROM product WHERE is_sold = 'FALSE'",
  (error, result) =>{
    if(error){
      console.error('Error retrieving data:', error);
      return res.status(500).send('Server error');
    }else{
      res.send(result);
    }
  })
})

//add payment data to payment table
app.post('/addPay', (req,res) =>{
  const { name, payment, cardno, cvv } = req.body;
  connection.query('INSERT INTO paymentinfo(name, cardtype, card_no, cvv) VALUES (?, ?, ?, ?)', [name, payment, cardno, cvv],
  (error, result) =>{
    if (error) {
      console.error('Error adding payment:', error);
      return res.status(500).send('Server error');
    }else{
      res.send('Payment added');
    }
  })
})
app.post('/loadItem', (req, res) =>{
  const {productId} = req.body;
  connection.query('SELECT product_id FROM product WHERE product_id = ?', [productId],
  (error, result) =>{
    if(error){
      console.error('Error adding payment:', error);
      return res.status(500).send('Server error');
    }else{
      res.send(result);
    }
  })
})