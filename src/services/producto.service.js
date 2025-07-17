import { Producto } from "../models/Producto.js";
import { ProductoRepository } from "../repository/producto.repository.js";

export const ProductoService = {
  crearProducto: async ({ producto, stockAmount, fechaIngreso }) => {
    const nuevoProducto = new Producto({ producto, stockAmount, fechaIngreso });
    return await ProductoRepository.saveProduct(nuevoProducto);
  },
  listarProductos: async () => {
    const productos = await ProductoRepository.getAll();
    if (!productos) return null;
    const productosConStock = productos.filter((p) => p.stockAmount > 0);
    return productosConStock;
  },
  obtenerProductoPorId: async (id) => {
    const producto = await ProductoRepository.getById(id);
    if (!producto) return null;
    return producto;
  },
  incrementarStock: async (id, increment) => {
    if (!Number.isInteger(increment) || increment < 1) {
      throw {
        statusCode: 400,
        error: "El incremento debe ser un entero mayor o igual a 1",
      };
    }
    const productoActualizado = await ProductoRepository.incrementarStock(
      id,
      increment
    );
    return productoActualizado;
  },
};
