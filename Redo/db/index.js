const connection = require("./connection");

class Database {
  constructor(connection) {
    this.connection = connection;
  }

  getEmployees() {
    return new Promise((req, res) => {
      this.connection.query("SELECT * FROM employee", (err, results) => {
        req(results);
        res(err);
      });
    });
  }
}

module.exports = new Database(connection);
