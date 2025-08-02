const express = require("express")
const mongoose = require("mongoose")

const app = express()
app.use(express.json())


mongoose.connect("mongodb://127.0.0.1:27017/ecommerce")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err))

const productRoutes = require("./routes/productRoutes")
const userRoutes = require("./routes/userRoutes")


app.use("/products", productRoutes)
app.use("/users", userRoutes)


app.listen(3000, () => {
  console.log("api is runing3000")
});
