const express = require("express");

const app = express();

app.use(express.json());

app.get("/demo", async (req, res) => {
  try {
    return res.json({ message: "Hello Chandrakant Deore" });
  } catch (err) {
    return res.status(500).json({ error: "Error" });
  }
});

app.listen(4000, () => {
  try {
    console.log("Listening on port 4000");
  } catch (err) {
    console.log(err);
  }
});
