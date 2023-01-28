const express = require('express')
require('dotenv').config()
const app = express()
const port = 5000 || process.env.PORT
const cors = require("cors")


app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})