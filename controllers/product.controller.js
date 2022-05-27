const express = require("express");
const Product = require("../models/product.model");
const router = express.Router();

router.post("/product", async (req, res) => {
  try {
    const product = await Product.create(req.body);

    return res.status(200).send(product);
  } catch (err) {
    res.status(500).json({ error: "Something Went Wrong" });
  }
});

router.get("/product", async (req, res) => {
  try {
    const product = await Product.find().lean().exec();

    return res.status(201).send(product);
  } catch (err) {
    return res.status(533).json({ error: "Cannot Get Products" });
  }
});

module.exports = router;
