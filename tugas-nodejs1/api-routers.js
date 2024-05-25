const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    Nama: "Muhammad Novariadi",
    TanggalLahir: "18 November 1996",
    JenisKelamin: "Laki-Laki",
    Hobi: "Membaca Buku"
  });
});

module.exports = router;
