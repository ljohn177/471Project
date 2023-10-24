CREATE DATABASE EPAY;

USE EPAY; 

CREATE TABLE user(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
	birth_day INT,
    birth_month INT,
	birth_year INT,
    phone_number VARCHAR(20) NOT NULL,
    address VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
    );
    
CREATE TABLE product(
	product_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(1000) NOT NULL,
    image VARCHAR(500) NOT NULL,
    description VARCHAR(1000), 
    price FLOAT NOT NULL,
    seller_id INT NOT NULL,
    is_sold BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (product_id),
    FOREIGN KEY (seller_id) REFERENCES user(id)
);

CREATE TABLE payment(
	payment_id INT NOT NULL AUTO_INCREMENT,
    receiver_id INT NOT NULL,
    sender_id INT NOT NULL,
    amount FLOAT NOT NULL,
    PRIMARY KEY (payment_id), 
    FOREIGN KEY (receiver_id) REFERENCES user(id),
    FOREIGN KEY (sender_id) REFERENCES user(id)
);
CREATE TABLE paymentinfo(
	user_id INT NOT NULL,
	name VARCHAR(255),
    cardtype VARCHAR(255),
    card_no INT NOT NULL,
    cvv INT,
    PRIMARY KEY (card_no),
    FOREIGN KEY (user_id) REFERENCES user(id)
);
    
    
    