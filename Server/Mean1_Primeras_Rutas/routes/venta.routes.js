const express = require("express");
const router = express.Router();
const VentaController = require("../controller/venta.controller");

router.post("/registro", VentaController.registro);
router.get("/:id", VentaController.findById);
module.exports = router;
