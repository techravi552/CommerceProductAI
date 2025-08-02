const express = require("express")
const app = express()
const Product = require("../module/products")


app.post("/", async (req, res) => {
  try {
    const product = new Product(req.body)
    await product.save();
    res.status(201).send(product);
  } catch (err) {
    res.status(400).send({ error: err.message })
  }
})


app.get("/", async (req, res) => {
  const products = await Product.find()
  res.send(products)
})


app.patch("/:id", async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.send(updated)
})


app.delete("/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id)
  res.send({ message: "Product deleted" })
})

module.exports = app
