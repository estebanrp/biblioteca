import db from "../config/db.js";

const mSocio = {
    getOne: async (id) => {
    try {
      const [results] = await db.query("SELECT * FROM tasks WHERE id = ?", [
        id,
      ]);
      return results[0];
    } catch (err) {
      throw {
        status: 500,
        message: `Error al obtener la tarea con el id ${id}`,
      };
    }
  },
};

export default mSocio;
