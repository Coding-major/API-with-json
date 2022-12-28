const express = require("express");
const products = require("./data");


const app = express();   

// app.use(express.static("public"))
const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next()
}


app.get("/", logger, (req, res) => {
    res.send("Home")
})

app.get("/about", logger, (req, res) => {
    res.send("About")
})

app.get("/api/products", logger, (req, res) => {
    res.send('products')
})

app.get("/api/items", logger, (req, res) => {
    res.send("items  ")
})


app.listen(3000, () => {
     console.log("connection started at port 3000")
})