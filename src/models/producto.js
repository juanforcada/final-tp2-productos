import { v4 as uuidv4 } from "uuid";

export class Producto {
  constructor({ id, producto, stockAmount, fechaIngreso }) {
    if (!producto || typeof producto !== "string" || producto.trim() === "") {
      throw {
        statusCode: 400,
        error: "El campo producto es obligatorio",
      };
    }
    if (!Number.isInteger(stockAmount) || stockAmount < 0) {
      throw {
        statusCode: 400,
        error: "El campo stockAmount debe ser un entero mayor o igual a 0",
      };
    }
    const today = new Date().toISOString().slice(0, 10);
    if (fechaIngreso) {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(fechaIngreso)) {
        throw {
          statusCode: 400,
          error: "El campo fechaIngreso debe estar en formato ISO 8601",
        };
      }
      this.fechaIngreso = fechaIngreso;
    } else {
      this.fechaIngreso = today;
    }
    this.id = id || uuidv4();
    this.producto = producto;
    this.stockAmount = stockAmount;
  }
}
