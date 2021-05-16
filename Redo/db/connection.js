const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "root1234",
  database: "employees_db",
});

connection.connect((err) => {
  if (err) throw err;

  console.log("Connection established!");
});
module.exports = connection;
