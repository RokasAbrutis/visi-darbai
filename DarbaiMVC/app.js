
const express = require('express')
const app = express()
const port = 3000
var mysql = require('mysql');

const darbaiRoutes = require("./routes/darbaiRoutes");

app.use(express.urlencoded({ extended: true }));
app.use("/", darbaiRoutes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})