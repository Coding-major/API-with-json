const express = require("express");
const products = require("./data");


const app = express();
// app.use(express.static("public"))

app.get("/api/products/:productId", (req, res) => {
    const productId = Number(req.params.productId)
    const finded = products.find(
        (result) => result.id === productId)

    if (!finded) {
        return res.status(404).send("product does not exist")
    }

    return res.json(finded)


})

app.listen(3000, () => {
     console.log("connection started at port 3000")
})