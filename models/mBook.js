import db from "../config/db.js";

const mBook = {
  getOne: async (id) => {
    try {
      const [results] = await db.query("SELECT * FROM libros WHERE id = ?", [
        id,
      ]);
      return results[0];
    } catch (err) {
      throw {
        status: 500,
        message: `Error al buscar el libro con el id ${id}`,
      };
    }
  },

  updateLoaned: async (id) => {
    try {
      await db.query("UPDATE libros SET estado=? WHERE id = ?", ["Prestado", id]);
    } catch (err) {
      throw {
        status: 500,
        message: `Error al actualizar el libro con el id ${id}`,
      };
    }
  },

  updateReturned: async (id) => {
    try {
      await db.query("UPDATE libros SET estado=? WHERE id = ?", ["Disponible", id]);
      await db.query("UPDATE prestamos SET date_returned=? WHERE id_book = ?", [new Date(), id]);
    } catch (err) {
      throw {
        status: 500,
        message: `Error al registrar la devolucion ${id}`,
      };
    }
  },
};

export default mBook;
