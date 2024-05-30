// import express & router
const express = require("express");
const route = express.Router();

const controller = require("../controller/controller");

// setup endpoint url request
route.post("/api/users", controller.create);
route.get("/api/users", controller.findAll);
route.get("/api/users/:username", controller.findByUsername);
route.put("/api/users/:username", controller.update);
route.delete("/api/users/:username", controller.delete);

module.exports = route;
