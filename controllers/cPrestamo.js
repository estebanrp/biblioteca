import mSocio from "../models/mSocio.js";

const cPrestamo = {
    home: async (req, res) => {
        res.render("home.ejs",);
    },
    
    // prestamo: async (req, res) => {
    //     res.render("prestamo.ejs");
    // }
};

export default cPrestamo;
