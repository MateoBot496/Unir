const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    marca: { type: String, required: true},
    modelo: { type: String, required: true},
    precio: { type: Number, required: true},
    anio: { type: Number, required: true, min: 2000},
    isVendido: { type: Boolean, default: false},
    extras: [String]
}, {versionKey: false, timestamps: true });

const Coche = mongoose.model('coche2', Schema);
module.exports = Coche;