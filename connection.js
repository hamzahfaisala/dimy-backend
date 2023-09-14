const mysql = require('mysql')

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dimy_backend"
})

module.exports = db