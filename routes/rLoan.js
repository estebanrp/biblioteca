import { Router } from "express";
import cLoan from "../controllers/cLoan.js";

const routes = Router();

routes.get("/loan", cLoan.getLoanForm);
routes.post("/loan", cLoan.createLoan);

export default routes;
