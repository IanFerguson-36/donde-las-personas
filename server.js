const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");
const connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "root1234",
  database: "employees_db",
});

const testQuery = () => {
  const query = "SELECT * FROM department";
  connection.query(query, (err, res) => {
    console.log(res);
  });
};

connection.connect((err) => {
  if (err) throw err;
  // runSearch();
  console.log("Connection established!");
  testQuery();
});
