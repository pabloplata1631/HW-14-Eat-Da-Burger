var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: 'root',
  password: " ", //double check
  database: "burgers_db"

});

connection.connect(function(err){
  if(err) throw err;
  console.log("connection has an id of " + connection.threadId);
});
 
  module.exports = connection;