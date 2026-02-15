const express = require("express");
const router = express.Router();
const UsuarioModelo = require("../model/usuario.model");
const usuarios = require("../bbdd/usuarios");
const Usuario = require("../model/usuario.model");

class UsuarioController {
  async cargaInicial(req, res) {
    try {
      const result = await UsuarioModelo.insertMany(usuarios, {
        ordered: false,
      });
      return res.status(200).json({
        mensaje: "Carga inicial realizada con éxito",
        insertedCount: result.length,
      });
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .json({ mensaje: "Error al insertar datos", error: err.message });
    }
  }

  async findByUsernameAndPassword(req, res) {
    const result = await Usuario.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    if (result) {
      return res.status(200).json(result);
    } else {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }
  }

  async findById(req, res) {
    const result = await Usuario.findById(req.params.id);
    if (result) {
      return res.status(200).json(result);
    } else {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }
  }

  async findAll(req, res) {
    const result = await Usuario.find();
    return res.status(200).json(result);
  }
}

module.exports = new UsuarioController({});
