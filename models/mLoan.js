import db from "../config/db.js";

const mLoan = {
    getOne: async (id_member, id_book) => {
        // get one loan by member and book id, only open loans (fecha_devolucion = null) -> that it's for not return past loans from the same pair of user and book.
        try {
            const [results] = await db.query("SELECT * FROM prestamos WHERE (id_socio, id_libro, fecha_devolucion) = (?,?,?)", [id_member, id_book, null]);
            return results[0];
        } catch (err) {
            throw { status: 500, message: `Error al buscar el préstamo con el id ${id}` };
        }
    },

    create: async (loan) => {
        try {
            await db.query("INSERT INTO prestamos (id_socio, id_libro, fecha_prestamo, fecha_hasta, fecha_devolucion) VALUES (?, ?, ?, ?, ?)", [loan.id_member, loan.id_book, loan.date, loan.date_until, loan.date_returned]);
        } catch (err) {
            throw { status: 500, message: "Error al crear el préstamo" };
        }
    }
}

export default mLoan;