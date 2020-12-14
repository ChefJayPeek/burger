-- Create Database from scratch
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create burgers table

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT
    , burger_name VARCHAR(80)
    , doevoured BOOLEAN
    , PRIMARY KEY (id)
);