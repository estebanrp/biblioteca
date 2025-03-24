import { Router } from "express";
import cPrestamo from "../controllers/cPrestamo.js";

const routes = Router();

routes.get("/", cPrestamo.home);
//routes.get("/prestamo", cPrestamo.prestamo);

export default routes;
