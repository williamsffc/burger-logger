DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name varchar(50) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY(id)
);