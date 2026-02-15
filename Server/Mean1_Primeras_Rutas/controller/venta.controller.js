const express = require("express");
const router = express.Router();
const UsuarioModelo = require("../model/usuario.model");
const CocheModelo = require("../model/coche.model");
const VentaModelo = require("../model/venta.model");

class VentaController {
  async registro(req, res) {
    const usuarioVenta = await UsuarioModelo.findById(req.body.idUsuario);
    const cocheVendido = await CocheModelo.findById(req.body.idCoche);

    if (!usuarioVenta || !cocheVendido) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    } else {
      const nuevaVenta = new VentaModelo({
        usuario: usuarioVenta._id,
        coche: cocheVendido._id,
        precio: req.body.precio,
      });

      cocheVendido.isVendido = true;
      await cocheVendido.save();
      await nuevaVenta.save();
      res.status(201).json({ mensaje: "Venta registrada correctamente" });
    }
  }

  async findById(req, res) {
    const venta = await VentaModelo.findById(req.params.id)
      .populate("usuario", "nombre email")
      .populate("coche", "marca modelo precio");
    if (!venta) {
      return res.status(404).json({ mensaje: "Venta no encontrada" });
    }else {
      return res.status(200).json(venta);
    }
  }
}

module.exports = new VentaController({});
