const express = require("express");
const products = require("./data");

const app = express();
// app.use(express.static("public"))

app.get("/", (req, res) => {
    const partialProducts = products.map((result) => {
        const {name, image, id} = result
        return {name, id, image}
    })
    
    res.json(partialProducts)
})

app.listen(3000, () => {
     console.log("connection started at port 3000")
})