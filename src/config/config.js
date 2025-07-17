import dotenv from "dotenv";
dotenv.config();

export const config = {
  PORT: process.env.PORT || 3000,
  HOST: process.env.HOST || "127.0.0.1",
  DB_PRODUCT_PATH: process.env.DB_PRODUCT_PATH || "./src/db/producto.db.json",
};
