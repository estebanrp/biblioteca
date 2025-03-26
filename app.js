import express from "express";
import session from "express-session";
import path from "path";
import cors from "cors";
import helmet from "helmet";
import error from "./middlewares/error.js";
import routesLoans from "./routes/rLoan.js";
import routesUsers from "./routes/rUser.js";
import { isAuthenticated } from "./middlewares/auth.js";

const __dirname = path.resolve();
const app = express();
const port = 3000;

app.use(cors());
app.use(helmet());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "mi_secreto",
    resave: true,
    saveUninitialized: true,
  })
);

app.get("/", (req, res) => {
  res.render("index");
});

app.use(routesUsers);
app.use(isAuthenticated, routesLoans);
app.use(error.e404);

app.listen(port, () => {
  console.log(`La aplicación está funcionando en http://localhost:${port}`);
});
