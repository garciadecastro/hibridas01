import express from "express";
import JuegosRoute from "./routes/juegos.routes.js";
import HomeRoute from "./routes/home.routes.js";

const app = express();
const PORT = 3333;

// Middleware
app.use(express.json());

// Rutas
app.use(HomeRoute);
app.use(JuegosRoute);

app.listen(PORT, ()=> console.log(`Funcionando en: http://localhost:${PORT}/`));