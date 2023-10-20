CREATE DATABASE EPAY;

USE EPAY; 

CREATE TABLE user(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
	birth_day INT,
    birth_month INT,
	birth_year INT,
    phone_number VARCHAR(20) NOT NULL,
    address VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
    );
    
CREATE TABLE seller(
	seller_id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    PRIMARY KEY(seller_id),
    FOREIGN KEY (user_id) REFERENCES user(id) 
);

CREATE TABLE buyer(
	buyer_id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    PRIMARY KEY(buyer_id),
    FOREIGN KEY (user_id) REFERENCES user(id)
    
);

CREATE TABLE product(
	product_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(1000) NOT NULL,
    image VARCHAR(500) NOT NULL,
    description VARCHAR(1000), 
    price FLOAT NOT NULL,
    seller_id INT NOT NULL,
    PRIMARY KEY (product_id),
    FOREIGN KEY (seller_id) REFERENCES seller(seller_id)
);

CREATE TABLE payment(
	payment_id INT NOT NULL AUTO_INCREMENT,
    receiver_id INT NOT NULL,
    sender_id INT NOT NULL,
    amount FLOAT NOT NULL,
    currency VARCHAR(10) NOT NULL,
    PRIMARY KEY (payment_id), 
    FOREIGN KEY (receiver_id) REFERENCES seller(seller_id),
    FOREIGN KEY (sender_id) REFERENCES buyer(buyer_id)
);
    
    
    