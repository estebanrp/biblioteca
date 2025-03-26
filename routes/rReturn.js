import { Router } from "express";
import cReturn from "../controllers/cReturn.js";

const routes = Router();

routes.get("/return", cReturn.getRetunForm);
routes.post("/return", cReturn.createReturn);

export default routes;
