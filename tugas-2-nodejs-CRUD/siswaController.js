// import siswaModel
const Siswa = require("./siswaModel");

// index view
exports.index = function (req, res) {
  Siswa.get(10)
    .then((siswa) => {
      res.json({
        status: "success",
        message: "Data siswa berhasil ditampilkan",
        data: siswa
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "error",
        message: "Data siswa gagal ditampilkan",
        error: error.message
      });
    });
};

// Create data siswa
exports.new = function (req, res) {
  let siswa = new Siswa({
    nama: req.body.nama,
    tanggalLahir: req.body.tanggalLahir,
    jenisKelamin: req.body.jenisKelamin,
    hobi: req.body.hobi
  });
  siswa
    .save()
    .then((savedSiswa) => {
      res.json({
        status: "success",
        message: "Data siswa berhasil disimpan",
        data: savedSiswa
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "error",
        message: "Data siswa gagal di simpan",
        error: error.message
      });
    });
};