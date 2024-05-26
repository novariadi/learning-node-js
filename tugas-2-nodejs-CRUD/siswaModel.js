const mongoose = require('mongoose');

// schema setup
const SiswaSchema = mongoose.Schema({
    nama: {
        type: String,
        required: true,
    },
    tanggalLahir: {
        type: Date,
        required: true
    },
    jenisKelamin: {
        type: String,
        required: true
    },
    hobi: {
        type: String,
        required: true,
    }
})

// export siswa Model
const Siswa = mongoose.model('siswa', SiswaSchema);
module.exports = Siswa;

// tambahkan metode get
module.exports.get = function (limit) {
    return Siswa.find().limit(limit).exec();
}