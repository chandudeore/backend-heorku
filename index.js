const express = require("express");
const connect = require("./config/db");
const productController = require("./controllers/product.controller");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

app.get("/demo", async (req, res) => {
  try {
    return res.json({ message: "Hello Chandrakant Deore" });
  } catch (err) {
    return res.status(500).json({ error: "Error" });
  }
});

app.use("", productController);

app.listen(port, async () => {
  try {
    await connect();
    console.log("Listening on port 4000");
  } catch (err) {
    console.log(err);
  }
});
