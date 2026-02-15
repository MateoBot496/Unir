const express = require("express");

const router = express.Router();
const CocheModelo = require("../model/coche.model");

const coches = require("../bbdd/coches");

const cargaInicial = async (req, res) => {
  try {
    const result = await CocheModelo.insertMany(coches, { ordered: false });
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
};

const findAll = async (req, res) => {
  try {
    const coches = await CocheModelo.find();
    return res.status(200).json(coches);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ mensaje: "Error al obtener datos", error: err.message });
  }
};

const findById = async (req, res) => {
  try {
    const coche = await CocheModelo.findById(req.params.id);
    if (!coche) {
      return res.status(404).json({ mensaje: "Coche no encontrado" });
    }
    return res.status(200).json(coche);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ mensaje: "Error al obtener datos", error: err.message });
  }
};

const findByPrecioGreaterThan = async (req, res) => {
  try {
    const precio = parseFloat(req.params.precio);
    const coches = await CocheModelo.find({ precio: { $gt: precio } });
    return res.status(200).json(coches);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ mensaje: "Error al obtener datos", error: err.message });
  }
};

const findByMarca = async (req, res) => {
  try {
    const marca = req.params.marca;
    const coches = await CocheModelo.find({ marca: marca });
    return res.status(200).json(coches);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ mensaje: "Error al obtener datos", error: err.message });
  }
};

const insert = async (req, res) => {
  try {
    const nuevoCoche = new CocheModelo(req.body);
    const cocheGuardado = await nuevoCoche.save();
    return res.status(201).json(cocheGuardado);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ mensaje: "Error al insertar datos", error: err.message });
  }
};

const update = async (req, res) => {
  try {
    const coche = req.body;
    const cocheActualizado = await CocheModelo.findByIdAndUpdate(
      req.params.id,
      coche,
      { new: true, runValidators: true },
    );
    if (!cocheActualizado) {
      return res.status(404).json({ mensaje: "Coche no encontrado" });
    }
    return res.status(200).json(cocheActualizado);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ mensaje: "Error al actualizar datos", error: err.message });
  }
};

const remove = async (req, res) => {
  try {
    const cocheEliminado = await CocheModelo.findByIdAndDelete(req.params.id);
    if (!cocheEliminado) {
      return res.status(404).json({ mensaje: "Coche no encontrado" });
    }
    return res.status(200).json({ mensaje: "Coche eliminado con éxito" });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ mensaje: "Error al eliminar datos", error: err.message });
  }
};

module.exports = {
  cargaInicial,
  findAll,
  findById,
  findByPrecioGreaterThan,
  findByMarca,
};
