const express = require("express");
const products = require("./data");
const logger = require("./logger")


const app = express(); 
app.use(logger)  

// app.use(express.static("public"))

app.get("/", (req, res) => {
    res.send("Home")
})

app.get("/about", (req, res) => {
    res.send("About")
})

app.get("/api/products", (req, res) => {
    res.send('products')
})

app.get("/api/items", (req, res) => {
    res.send("items  ")
})


app.listen(3000, () => {
     console.log("connection started at port 3000")
})