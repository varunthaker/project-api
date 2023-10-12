const express = require("express");
const dbConnect = require("./db/connect.js");
const Product = require("./db/models/Product.js");
const PORT = 8000 || process.env.PORT;

const app = express();
app.use(express.json());

dbConnect();

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(
    "<h2>API is running...!, Please redirect to 'https://project-api-7svg.onrender.com/api/v1/products' for all Products</h2>"
  );
});
app.get("/api/v1/products", async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/v1/products/:id", async (req, res) => {
  try {
    const productWithID = await Product.findById(req.params.id);
    res.status(200).json(productWithID);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = app;
