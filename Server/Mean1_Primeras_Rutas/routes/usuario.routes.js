const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller");

router.get("/cargaInicial", usuarioController.cargaInicial);
router.post("/login", usuarioController.findByUsernameAndPassword);
router.get("/", usuarioController.findAll);
router.get("/:id", usuarioController.findById);
//router.get("/rol/:rol", usuarioController.findByRol);

module.exports = router;
