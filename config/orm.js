// Import MySQL connection.
const connection = require("../config/connection.js");

// Object for all our SQL statement functions.
const orm = {
  selectAll(columns, tableName, cb) {
    connection.query("SELECT ?? FROM ??",[columns,tableName], (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  insertOne(tableName, values, cb) {
    connection.query("INSERT INTO ?? SET ?", [tableName, values], (err, results) => {
      if (err) throw err;
      cb(results);
    });
  },
  updateOne(tableName, newValues, targetId, cb) {
    connection.query("UPDATE ?? SET ? WHERE id = ?", [tableName, newValues, targetId], (err, results) => {
      if (err) throw err;
      cb(results);
    });
  }
};

// Export the orm object for the model (burger.js).
module.exports = orm;
