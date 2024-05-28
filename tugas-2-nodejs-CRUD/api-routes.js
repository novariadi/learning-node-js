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

router.route('/siswa/:id')
    .get(siswaController.view)
    .put(siswaController.update)
    .patch(siswaController.update)
    .delete(siswaController.delete)

// export API routers
module.exports = router;