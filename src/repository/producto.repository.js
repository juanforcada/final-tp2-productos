import { JsonHandler } from "../utils/JsonManager.js";
import { config } from "../config/config.js";

export const ProductoRepository = {
  saveProduct: async (product) => {
    const productos = (await JsonHandler.read(config.DB_PRODUCT_PATH)) || [];
    productos.push(product);
    await JsonHandler.write(productos, config.DB_PRODUCT_PATH);
  },
  getAll: async () => {
    return await JsonHandler.read(config.DB_PRODUCT_PATH);
  },
  getById: async (id) => {
    const productos = (await JsonHandler.read(config.DB_PRODUCT_PATH)) || [];
    const producto = productos.find((producto) => producto.id == id);
    return producto;
  },
  incrementarStock: async (id, increment) => {
    const productos = (await JsonHandler.read(config.DB_PRODUCT_PATH)) || [];
    const producto = productos.find((producto) => producto.id == id);
    if (!producto) return null;
    producto.stockAmount += increment;
    await JsonHandler.write(productos, config.DB_PRODUCT_PATH);
    return producto;
  },
};
