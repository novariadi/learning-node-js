const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Selamat Datang Di Data Center Siswa Indonesia");
});

router.get("/DataSiswa", (req, res) => {
    res.json({
        Nama: "Muhammad Novariadi",
        TanggalLahir: "18 November 1996",
        JenisKelamin: "Laki-Laki",
        Hobi: "Membaca Buku",
    });
});

module.exports = router;

