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


// tampilkan data siswa by id
exports.view = function (req, res) {
  Siswa.findById(req.params.id)
    .then((siswa) => {
      if (!siswa) {
        return res.status(400).json({
          status: "error",
          message: "data tidak ditemukan",
        })
      }
      res.status(200).json({
        status: "success",
        message: "data siswa by id ditemukan",
        data: siswa
      })
    })
    .catch(error => {
        res.status(500).json({
        status: "error",
        message: "Error loading siswa detail",
        error: error.message
      });
  })
}


// update data siswa
exports.update = function (req, res) {
  Siswa.findById(req.params.id)
    .then((siswa) => {
      if (!siswa) {
        return res.status(400).json({
          status: "error",
          message: "Id siswa Not found"
        })
      }

      siswa.nama = req.body.nama;
      siswa.tanggalLahir = req.body.tanggalLahir;
      siswa.jenisKelamin = req.body.jenisKelamin;
      siswa.hobi = req.body.hobi;
      return siswa.save()
    })
    .then((siswaUpdate) => {
      res.status(200).json({
        status: "success",
        message: "Data siswa berhasi di update",
        data: siswaUpdate
      })
    })
    .catch(error => {
      res.status(500).json({
        status: "error",
        message: "gagal update data siswa",
        error: error.message
     })
  })
}

// delete siswa
exports.delete = function (req, res) {
  Siswa.findByIdAndRemove(req.params.id)
    .then((siswa) => {
      if (!siswa) {
        return res.status(404).json({
          status: "error",
          message: "id siswa not found"
        });
      }
      res.json({
        status: "success",
        message: "data siswa deleted successfully"
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "error",
        message: "error deleting data siswa",
        error: error.message
      });
    });
};