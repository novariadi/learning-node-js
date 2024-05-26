const express = require('express');
const router = express.Router();

// root view
router.get('/', (req, res) => {
    res.json({
        status: "Api Siswa working",
        message: "Selamat Datang Di Data Center Siswa"
    });
});

// import siswaController
const siswaController = require('./siswaController')

// siswa routes
router.route('/siswa')
    .get(siswaController.index)
    .post(siswaController.new)


// export API routers
module.exports = router;