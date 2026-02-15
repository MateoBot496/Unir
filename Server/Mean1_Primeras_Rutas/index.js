const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const usuarioRoutes = require("./routes/usuario.routes");
const cocheRoutes = require("./routes/coche.routes");
const ventaRoutes = require("./routes/venta.routes");

const { default: mongoose } = require("mongoose");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/coches", cocheRoutes);
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/ventas", ventaRoutes);

mongoose
  .connect("mongodb://192.168.1.26:27017/bbdd-coches")
  .then(() => {
    console.log("Conexión a la base de datos establecida con éxito");
    console.log(
      "MongoDB URI:",
      mongoose.connection.host,
      mongoose.connection.port,
    );
  })
  .catch((err) => {
    console.log("Error al conectar a la base de datos:", err);
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
