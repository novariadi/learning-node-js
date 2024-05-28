// import contactModel
const Contact = require("./contactModel");

// handle index action
exports.index = function (req, res) {
  Contact.get(10) // limit model contact 10
    .then((contact) => {
      res.json({
        status: "success",
        message: "contact retrieved successfully",
        data: contact
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "error",
        message: "error retrieved contacts",
        error: error.message
      });
    });
};

// handle create contact
exports.new = function (req, res) {
  let contact = new Contact({
    name: req.body.name,
    gender: req.body.gender,
    email: req.body.email,
    phone: req.body.phone
  });

  contact
    .save()
    .then((savedContact) => {
      res.json({
        status: "success",
        message: "New Contact Created!",
        data: savedContact
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "error",
        message: "Error creating new contact",
        error: error.message
      });
    });
};

// handle view contact info
exports.view = function (req, res) {
  Contact.findById(req.params.contact_id)
    .then((contact) => {
      if (!contact) {
        return res.status(404).json({
          status: "error",
          message: "contact not found"
        });
      }

      res.json({
        status: "success",
        message: "contact detail loaded",
        data: contact
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "error",
        message: "Error loading contact detail",
        error: error.message
      });
    });
};

// handle update contact info
exports.update = function (req, res) {
  Contact.findById(req.params.contact_id)
    .then((contact) => {
      if (!contact) {
        return res.status(404).json({
          status: "error",
          message: "ID not found"
        });
      }
      contact.name = req.body.name;
      contact.gender = req.body.gender;
      contact.email = req.body.email;
      contact.phone = req.body.phone;
      return contact.save();
    })
    .then((updatedContact) => {
      res.json({
        status: "success",
        message: " Contact Info Updated",
        data: updatedContact
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "error",
        message: "Error updating contact info",
        error: error.message
      });
    });
};

// handle delete contact info
exports.delete = function (req, res) {
  Contact.findByIdAndRemove(req.params.contact_id)
    .then((deletedContact) => {
      if (!deletedContact) {
        return res.status(404).json({
          status: "error",
          message: "contact not found"
        });
      }
      res.json({
        status: "success",
        message: "Contact deleted successfully"
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "error",
        message: "error deleting contact",
        error: error.message
      });
    });
};
