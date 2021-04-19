INSERT INTO department  (name ) 
VALUES ( "Management"), ( "Accounting"), ("Sales"), ( "HR/Legal");

INSERT INTO _role (title, salary, department_id) 
VALUES ("Manager", 80000, 1), ("Assistant to the manager", 50000,1), ("Accountant",62000,2), ("Assistant to the accountant". 40000, 2), ("Salesman", 55000, 3), ("Assistant to the Salesman", 45000,3),
("HR-Person", 40000, 4), ("Assistant to the HR-Person", 35000, 4);


INSERT INTO employee (first_name, last_name, _role_id, manager_id)
VALUES ("Dale", "Cooper", 1, null), ("Dwight", "Schrute", 2, 1), ("Cyril", "Figis", 1, 1), ("Kevin", "Malone" , 2, 1), ("Al", "Harrington", 1, 1), ("Tiny", "Tim", 2, 1), ("Pam", "Poovey", 1, 1), ("Toby", "Flenderson", 2, 1);