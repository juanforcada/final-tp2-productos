import { Router } from "express";
import { ProductoController } from "../controllers/productoController.js";
import { basicAuth } from "../middlewares/basicAuth.js";

const ProductRouter = Router();

// Crear producto
ProductRouter.post("/", ProductoController.crearProducto);

// Listar productos
ProductRouter.get("/", ProductoController.listarProductos);

// Obtener producto por ID
ProductRouter.get("/:id", ProductoController.obtenerProductoPorId);

// Incrementar stock (requiere autenticación)
ProductRouter.put(
  "/:id/updateStock",
  basicAuth,
  ProductoController.incrementarStock
);

export { ProductRouter };
