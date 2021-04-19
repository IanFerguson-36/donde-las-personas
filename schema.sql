CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department(
    id INTEGER AUTO_INCREMENT NOT NULL
     name VARCHAR(30)
     PRIMARY KEY(ID)
);

CREATE TABLE _role (
    title VARCHAR(30),
    salary DECIMAL (10, 4)
    department_id INT
    PRIMARY KEY(ID)
);

CREATE TABLE employee (
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    _role id INT,
    manager_id INT
    PRIMARY KEY(ID)
);