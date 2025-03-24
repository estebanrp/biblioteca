import express from "express";
import session from "express-session";
import path from "path";
import cors from "cors";
import helmet from "helmet";
import rPrestamo from "./routes/rPrestamo.js";

const __dirname = path.resolve();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));


app.use(rPrestamo);


app.listen(port, () => {
    console.log(`La aplicación está funcionando en http://localhost:${port}`);
});