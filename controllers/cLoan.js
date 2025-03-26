import mBook from "../models/mBook.js";
import mLoan from "../models/mLoan.js";
import mMember from "../models/mMember.js";
import error from "../middlewares/error.js";

const cLoan = {
  getLoanForm: (req, res) => {
    res.render("loanForm");
  },

  createLoan: async (req, res) => {
    try {
      let { id_member, id_book } = req.body;
      let member = await mMember.getOne(id_member);
      let book = await mBook.getOne(id_book);

      if (member.fecha_inhab != null) {
        throw {
          status: 400,
          message: `El miembro con id ${id_member} está inhabilitado hasta ${fecha_inhab}`,
        };
      }

      if (book.tipo === "Consulta") {
        throw {
          status: 400,
          message: `El libro con id ${id_book} es de consulta`,
        }
      }

      if (book.estado === "Prestado") {
        throw {
          status: 400,
          message: `El libro con id ${id_book} ya está prestado`,
        };
      } else {
        const date = new Date();
        const date_until = new Date(date);
        date_until.setDate(date_until.getDate() + 7);
        await mLoan.create({ id_member, id_book, date, date_until, date_returned: null });
      }

      let loan = await mLoan.getOne(id_member, id_book);
      await mBook.updateLoaned(id_book);
      res.render("loanInfo", { member, book, loan });

    } catch (err) {
      error.e500(req, res, err);
    }
  },
};

export default cLoan;
