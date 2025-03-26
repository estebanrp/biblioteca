import db from "../config/db.js";

const mMember = {
    getOne: async (id) => {
        try {
            const [results] = await db.query("SELECT * FROM socios WHERE id = ?", [id]);
            return results[0];
        } catch (err) {
            throw {
                status: 500,
                message: `Error al obtener el miembro con el id ${id}`,
            };
        }
    },
};

export default mMember;