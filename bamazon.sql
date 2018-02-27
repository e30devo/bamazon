-- DROP DATABASE IF EXISTS bamazon; 
-- CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);

INSERT INTO  products (product_name, department_name, price, stock_quantity)
VALUES ("5-shelf display stand", "Home Decor", 241.00, 10);

INSERT INTO  products (product_name, department_name, price, stock_quantity)
VALUES ("Mid-Century Two-Drawer TV Cabinet", "Home Decor", 168.00, 15);

INSERT INTO  products (product_name, department_name, price, stock_quantity)
VALUES ("Square Ottoman", "Home Decor", 250.00, 20);

INSERT INTO  products (product_name, department_name, price, stock_quantity)
VALUES ("Vertical Cabinet", "Home Decor", 1223.00, 3);

INSERT INTO  products (product_name, department_name, price, stock_quantity)
VALUES ("Sculpture Coffee Table", "Home Decor", 336.00, 3);

INSERT INTO  products (product_name, department_name, price, stock_quantity)
VALUES ("Upholstered Wooden 2-Seater Loveseat", "Home Decor", 218.00, 5);

INSERT INTO  products (product_name, department_name, price, stock_quantity)
VALUES ("Walnut Side Table", "Home Decor", 300.00, 5);

INSERT INTO  products (product_name, department_name, price, stock_quantity)
VALUES ("Wood Swing Arm Desk/Table Lamp", "Home Decor", 32.00, 10);

INSERT INTO  products (product_name, department_name, price, stock_quantity)
VALUES ("Mid-Century Armchair, Heather Cashmire", "Home Decor", 744.00, 3);

INSERT INTO  products (product_name, department_name, price, stock_quantity)
VALUES ("Mid-Century Modern Desk, Walnut", "Home Decor", 943.00, 5);