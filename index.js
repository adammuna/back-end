
const express = require('express')
const mongoose = require('mongoose')
const itemApi = require('./server/routes/items.api')
require('dotenv').config()
const path = require("path")


mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("connected to dataBase"))

const app = express()
const PORT = process.env.PORT

console.log(process.env.MESSAGE);

app.use(express.static(path.join(__dirname, "dist")))
app.use(express.json())
app.use("/item", itemApi)


app.listen(PORT, function() {
    console.log("up and running on port " + PORT);
})