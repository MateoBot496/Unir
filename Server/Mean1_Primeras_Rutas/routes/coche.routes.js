const express = require('express');
const router = express.Router();
const cocheController = require('../controller/coche.controller');


router.get("/cargaInicial", cocheController.cargaInicial);
router.get("/todos", cocheController.findAll);
router.get("/:id", cocheController.findById);
router.get("/precioMayor/:precio", cocheController.findByPrecioGreaterThan);
router.get("/marca/:marca", cocheController.findByMarca);

module.exports = router;