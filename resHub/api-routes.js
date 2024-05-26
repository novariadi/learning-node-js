const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    status: " API its working",
    message: " Welcome to resHub BackEnd App"
  });
});

// import contact controller
const contactController = require('./contactController');

// contact routes
router.route('/contacts')
  .get(contactController.index)
  .post(contactController.new);

router.route('contacts/:contact:id')
  .get(contactController.view)
  .patch(contactController.update)
  .put(contactController.update)
  .delete(contactController.delete)


// export API routers
module.exports = router;
