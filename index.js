const express = require("express")
const app = express()
const port = 3000
const bodyParser = require("body-parser")
const db = require("./connection")

app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.send("hello world")
})

app.get("/customer", (req, res) => {
  db.query("SELECT * from customer", (error, result) => {
    console.log(result);
    res.send(result)
  })
})

app.get("/transaction", (req, res) => {
  db.query("SELECT * from transaction", (error, result) => {
    console.log(result);
    res.send(result)
  })
})

app.get("/product", (req, res) => {
  db.query("SELECT * from product", (error, result) => {
    console.log(result);
    res.send(result)
  })
})

app.get("/payment_method", (req, res) => {
  db.query("SELECT * from payment_method", (error, result) => {
    console.log(result);
    res.send(result)
  })
})

app.post("/transaction", (req, res) => {
  const {customer_id, product_id, payment_method_id} = req.body

  const sql = `INSERT INTO transaction (customer_id, product_id, payment_method_id) VALUES (${customer_id}, ${product_id}, ${payment_method_id})`

  db.query(sql, (error, fields) => {
    if(error) throw error
    if(fields.affectedRows) console.log(fields);
  })
  res.send("transaction successfully created")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
