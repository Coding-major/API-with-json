const express = require("express");
const products = require("./data");


const app = express();
// app.use(express.static("public"))
app.get("/api/products", (req, res) => {
    const productsDetails = products.map((result) => {
        const {name, id, image} = result;
        return {id, name, image}
    })

    res.json(productsDetails)
})

app.get("/", (req, res) => {
    res.send('<h1> Home page</h1><a href="/api/products">products</a>')
})
app.get("/api/products/:productId", (req, res) => {
    const productId = Number(req.params.productId)
    const finded = products.find(
        (result) => result.id === productId)

    if (!finded) {
        return res.status(404).send("product does not exist")
    }

    return res.json(finded)
    console.log(req.params);
})

app.get("/api/products/:productId/review/:reviewId", (req, res) => {
    res.send("hello world")
})

app.get("/api/v1/query", function(req, res) {
    const {search, limit} = req.query
    let sortedProducts = [...products]
    
    if (search) {
        sortedProducts = sortedProducts.filter((result) => {
            return result.name.startsWith(search)
        })
    }

    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    if (sortedProducts.length<1) {
        return res.status(200).send("No products matches your search")
    }
    res.status(200).json(sortedProducts)
})


app.listen(3000, () => {
     console.log("connection started at port 3000")
})