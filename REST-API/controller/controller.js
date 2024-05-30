// import model
const userdb = require("../model/model");

// create data user
exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    return res.status(400).send({ message: "Data content connot be empty" });
  }

  // ambil data request dari json/ form-url-encoded
  const user = new userdb({
    username: req.body.username,
    password: req.body.password,
    name: req.body.name,
    email: req.body.email
  });

  user
    .save()
    .then(data => {
      res.status(201).json({
        message: "success created data user",
        data: data
      });
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: err.message || " Internal servel Error" });
    });
};
// ambil semua data
exports.findAll = (req, res) => {
  try {
    userdb
      .find({}, {password:0})
      .then(data => {
        if (data.length > 0) {
          res.status(200).json({ message: "data ditemukan", data: data });
        } else {
          res.status(404).json({ message: "data tidak ditemukan" });
        }
      })
      .catch(err => {
        res.status(500).json({
          message: "Terjadi kesalahan saat mencari data",
          error: err.message
        });
      });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      message: "Terjadi kesalahan saat mengekstrak username dari body",
      error: err.message
    });
  }
};

// ambil data dari parameter
exports.findByUsername = (req, res) => {
  try {
    let userName = req.params.username;
    userdb
      .find({ username: userName }, { password: 0 })
      .then(data => {
        // Jika data ditemukan, kirimkan sebagai respons
        if (data.length > 0) {
          res.status(200).json({
            message: "Data by username berhasil ditemukan",
            data: data
          });
        } else {
          // Jika tidak ada data yang ditemukan, kirimkan pesan 404
          res.status(404).json({
            message: "Data tidak ditemukan"
          });
        }
      })
      .catch(err => {
        res.status(500).json({
          message: "Terjadi kesalahan saat mencari data berdasarkan username",
          error: err.message
        });
      });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      message: "Terjadi kesalahan saat mengekstrak username dari body",
      error: err.message
    });
  }
};

exports.update = (req, res) => {
  try {
    userdb
      .findOneAndUpdate({ username: req.params.username }, req.body, {
        new: true
      })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message:
              " tidak bisa update user dengan username " + req.params.username
          });
        } else {
          res.json({
            message: "success update date user",
            data: data
          });
        }
      });
  } catch (err) {
    res.status(500).send({ message: err.message || "Internal Server Error" });
  }
};

// delete data user by username
exports.delete = (req, res) => {
  const userName = req.params.username;

  userdb.findOneAndDelete({ username: userName }).then(data => {
    if (!data) {
      res.status(404).send({
        message: "tidak bisa delete user dengan username " + req.params.username
      });
    } else {
      res.json({
        message: "success delete data user"
      });
    }
  });
};
