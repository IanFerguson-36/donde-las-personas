DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department(
    id INTEGER AUTO_INCREMENT NOT NULL,
     name VARCHAR(30),
     PRIMARY KEY(id)
);

CREATE TABLE _role (
    id INTEGER AUTO_INCREMENT NOT NULL,
    title VARCHAR(30),
    salary DECIMAL (10, 4),
    department_id INT,
    PRIMARY KEY(id),
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    _role_id INT,
    manager_id INT,
    PRIMARY KEY(id),
    FOREIGN KEY (_role_id) REFERENCES _role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);