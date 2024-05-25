const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    status: " API its working",
    message: " Welcome to resHub BackEnd App"
  });
});

router.post("/", (req, res) => {
  res.send("create data berhasil");
});

router.put("/", (req, res) => {
  res.send("Update data berhasil");
});

router.delete("/", (req, res) => {
  res.send("delete data berhasil");
});

module.exports = router;
