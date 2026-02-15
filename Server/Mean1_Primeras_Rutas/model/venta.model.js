const mongoose = require("mongoose");

const ventaSchema = new mongoose.Schema(
  {
    coche: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "coche2",
      required: true,
    },
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "usuario",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
const Venta = mongoose.model("venta", ventaSchema);

module.exports = Venta;
