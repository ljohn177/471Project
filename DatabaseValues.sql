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
VALUES (1, "Nike Shoes", "/Images/nikeShoesImage.jpg", "a clean pair of nike shoes", 45.99, 2, FALSE),
(2, "Addidas Shoes", "/Images/addidasShoesImage.jpg", "addidas running shoes", 65.00, 2, FALSE),
(3, "Iphone", "/Images/IphoneImage.jpg", "a used iphone", 450.00, 1, FALSE),
(4, "Samsung Phone", "/Images/samsungPhoneImage.jpg", "a brand new samsung galaxy phone", 648.30, 3, FALSE),
(5, "Bike", "/Images/bikeImage.jpg", "Bike in good condition" , 99.99 , 5, FALSE),
(6, "Jeans", "/Images/jeansImage.jpg", "pair of pants lightly worn", 32.00, 6, FALSE),
(7, "baseball hat", "/Images/hatImage.jpg", "used hat with some damage", 12.50, 4, FALSE),
(8, "Necklace", "/Images/necklaceImage.jpg", "Shiny new necklace with real gold!", 72.48, 1, FALSE),
(9, "Socks", "/Images/sockImage.jpeg", "Freshly washed socks" , 1.99 , 6, FALSE),
(10, "Watch", "/Images/watchImage.jpg", "vintage watch", 153.00, 3, FALSE),
(11, "Laptop", "/Images/laptopImage.jpg", "Refurbished laptop", 989.99, 5, FALSE),
(12, "Puma Shoes", "/Images/PumaShoesImage.jpg", "puma walking shoes", 44.00, 2, FALSE),
(13, "Apple Laptop", "/Images/appleLaptopImage.jpg", "a brand new MacBook pro",  1650.00, 4, FALSE),
(14, "Dress Pants", "/Images/dressPantsImage.jpg", "fancy dress pants", 24.50, 2, FALSE),
(15, "TShirt", "/Images/tShirtImage.jpg", "Class fit T-Shirt" , 5.99 , 5, FALSE),
(16, "Ipad", "/Images/ipadImage.jpg", "old Ipad", 210.00, 1, FALSE),
(17, "Backpack", "/Images/backpackImage.jpg", "school backpack", 35.99, 3, FALSE),
(18, "Skateboard", "/Images/skateboardImage.jpg", "Sick skateboard", 50.50, 6, FALSE),
(19, "Electric Bike", "/Images/electricBikeImage.jpg", "electric assisted pedaling bike" , 1499.99 , 2, FALSE),
(20, "Cowboy Hat", "/Images/cowboyHatImage.jpg", "Authentic Cowboy Hat", 87.00, 3, FALSE),
(21, "Gaming Laptop", "/Images/gamingLaptopImage.jpg", "Gaming laptop", 1989.99, 5, FALSE);
