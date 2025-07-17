# API RESTful de Gestión de Stock de Productos

## Descripción

Este proyecto es una API RESTful desarrollada en Node.js con Express para gestionar el stock de productos. Cumple con los requisitos de estructura en capas, validaciones y autenticación por API Key.

## Estructura del Proyecto

- **routes/**: Definición de rutas y endpoints.
- **controllers/**: Lógica de coordinación de peticiones.
- **models/**: Entidades del dominio (Producto).
- **repository/**: Persistencia en archivo JSON.
- **services/**: Lógica de negocio y casos de uso (opcional, si usas service).
- **config/**: Configuración de variables y parámetros del sistema.
- **middlewares/**: Autenticación por API Key.
- **tests/**: Archivo de pruebas de endpoints (`test.endpoints.http`).
- **utils/**: Funciones auxiliares (manejo de JSON).

## Instalación y Ejecución

1. Clona el repositorio y entra en la carpeta del proyecto.
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor:
   ```bash
   npm run dev
   ```
   o
   ```bash
   npm start
   ```
   o
   ```bash
   node app.js
   ```
4. El servidor se ejecuta por defecto en `http://localhost:3000` (puedes cambiar el puerto en el archivo de configuración).

## Pruebas de Endpoints

- Usa el archivo `tests/test.endpoints.http` con la extensión REST Client de VS Code para probar los endpoints fácilmente.
- Ejemplo de uso:
  - Crear producto
  - Listar productos
  - Obtener producto por ID
  - Incrementar stock (requiere header `x-api-key`)

## Autenticación

- El endpoint para incrementar stock requiere el header:
  ```
  x-api-key: soy-una-api-key
  ```
- Si la API Key falta o es incorrecta, la respuesta será un error 401 o 403 respectivamente.

## Validaciones Clave

- `producto`: obligatorio, no vacío.
- `stockAmount`: entero ≥ 0.
- `fechaIngreso`: formato ISO 8601, asignado automáticamente si no se envía.
- Incremento de stock: entero ≥ 1.

## Persistencia

- Los productos se almacenan en un archivo JSON (`db/producto.db.json`).

## Requisitos

- Node.js >= 18
- Express
- Extensión REST Client (opcional, para pruebas)

## Notas

- El proyecto es solo backend, no incluye frontend.
- Puedes reutilizar y adaptar el código para otros sistemas de inventario.
