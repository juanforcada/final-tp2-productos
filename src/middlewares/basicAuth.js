export function basicAuth(req, res, next) {
  const apiKey = req.headers["x-api-key"];
  const validApiKey = "soy-una-api-key";

  if (!apiKey) {
    return res.status(401).json({
      statusCode: 401,
      error: "Unauthorized (sin credenciales)",
    });
  }
  if (apiKey !== validApiKey) {
    return res.status(403).json({
      statusCode: 403,
      error: "Forbidden (credenciales inválidas)",
    });
  }
  next();
}
