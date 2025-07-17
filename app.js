import dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import { config } from "./src/config/config.js";
import { ProductRouter } from "./src/routes/producto.router.js";
const DISPLAY_MSG = `Serving at http://${config.HOST}:${config.PORT}`;

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/productos", ProductRouter);

app.get("/", (req, res) => {
  res.json({ status: 200, msg: "Hola Mundo" });
});

app.use((req, res) => {
  res.status(404).send("Pagina no existe");
});

app.listen(config.PORT, () => {
  console.log(DISPLAY_MSG);
});
