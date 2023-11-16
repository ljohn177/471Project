USE EPAY; 

INSERT INTO user
VALUE
(1, "Lennon", "lennon@gmail.com", "123", 1, 12, 2000, 1234567890, "471 Database Blvd."), 
(2, "Jacob", "jacob@gmail.com", "password", 2, 6, 2000, 1112223333, "1160 Sample Road"), 
(3, "Lada", "lada@gmail.com", "4444", 24, 9, 2002, 1112223333, "512 Example Address"), 
(4, "Praneetha", "praneetha@gmail.com", "2023", 7, 11, 2000, 1112223333, "819 Fake Address Rd."), 
(5, "Troyer", "troyer@gmail.com", "1010", 4, 21, 1999, 2443110909, "123 Not Real St."), 
(6, "Tyler", "tyler@gmail.com", "1111", 11, 8, 2001, 9087423344, "101 Sample Rd.");


INSERT INTO product
VALUES (1, "Nike Shoes", "nikeShoesImage.jpg", "a clean pair of nike shoes", 45.99, 2, FALSE),
(2, "Addidas Shoes", "addidasShoesImage.jpg", "addidas running shoes", 65.00, 2, FALSE),
(3, "Iphone", "IphoneImage.jpg", "a used iphone", 450.00, 1, FALSE),
(4, "Samsung Phone", "samsungPhoneImage.jpg", "a brand new samsung galaxy phone", 648.30, 3, FALSE),
(5, "Bike", "bikeImage.jpg", "Bike in good condition" , 99.99 , 5, FALSE),
(6, "Jeans", "jeansImage.jpg", "pair of pants lightly worn", 32.00, 6, FALSE),
(7, "baseball hat", "hatImage.jpg", "used hat with some damage", 12.50, 4, FALSE),
(8, "Necklace", "necklaceImage.jpg", "Shiny new necklace with real gold!", 72.48, 1, FALSE),
(9, "Socks", "sockImage.jpg", "Freshly washed socks" , 1.99 , 6, FALSE),
(10, "Watch", "watchImage.jpg", "vintage watch", 153.00, 3, FALSE),
(11, "Laptop", "laptopImage.jpg", "Refurbished laptop", 989.99, 5, FALSE);
