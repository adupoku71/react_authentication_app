const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())

app.get("/", (req, res) => {
  res.json({
    name: "express app",
    des: "this is an express backend for my app",
  })
})

app.listen(5000, () => console.log("server is up and running"))
