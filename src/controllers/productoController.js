import { ProductoService } from "../services/producto.service.js";

export const ProductoController = {
  crearProducto: async (req, res) => {
    try {
      const { producto, stockAmount, fechaIngreso } = req.body;
      const guardado = await ProductoService.crearProducto({
        producto,
        stockAmount,
        fechaIngreso,
      });
      res.status(201).json({
        ok: true,
        message: "Created",
        payload: guardado,
      });
    } catch (error) {
      res.status(error.statusCode || 400).json({
        statusCode: error.statusCode || 400,
        error: error.message || "Error al crear el producto",
      });
    }
  },
  listarProductos: async (req, res) => {
    try {
      const productos = await ProductoService.listarProductos();
      if (!productos)
        res.status(400).json({
          ok: false,
          message: "No hay productos",
        });
      res.status(200).json({
        ok: true,
        payload: productos,
      });
    } catch (error) {
      res.status(error.statusCode || 400).json({
        statusCode: error.statusCode || 400,
        error: error.message || "Error al listar productos",
      });
    }
  },
  obtenerProductoPorId: async (req, res) => {
    try {
      const { id } = req.params;
      const producto = await ProductoService.obtenerProductoPorId(id);
      if (!producto) {
        return res
          .status(404)
          .json({ ok: false, message: "Producto no encontrado" });
      }
      res.status(200).json({ ok: true, payload: producto });
    } catch (error) {
      res.status(error.statusCode || 404).json({
        statusCode: "Not Found",
        error: error.message || "Error al buscar producto",
      });
    }
  },
  incrementarStock: async (req, res) => {
    try {
      const { id } = req.params;
      const { increment } = req.body;
      const productoActualizado = await ProductoService.incrementarStock(
        id,
        increment
      );
      if (!productoActualizado)
        res.status(400).json({ ok: false, message: "Producto no actualizado" });
      res.status(200).json({ ok: true, payload: productoActualizado });
    } catch (error) {
      res.status(error.statusCode || 404).json({
        statusCode: error.statusCode,
        error: error.message || "Error al actualizar stock del producto",
      });
    }
  },
};
