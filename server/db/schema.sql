DROP DATABASE IF EXISTS marketplace_db;
CREATE DATABASE marketplace_db;

\c marketplace_db;

CREATE TABLE category (
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR(30)
);

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(30),
    product_desc VARCHAR(255),
    cat_id INTEGER,
    FOREIGN KEY (cat_id) REFERENCES category(category_id)
);

