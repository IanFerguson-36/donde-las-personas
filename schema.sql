CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department(
    id INT PRIMARY KEY,
     name VARCHAR(30)
);

CREATE TABLE _role (
    id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL
    department_id INT
);

CREATE TABLE employee (
    id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    _role id INT,
    manager_id INT
);