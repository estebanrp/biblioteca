import mBook from "../models/mBook.js";
import mLoan from "../models/mLoan.js";
import mMember from "../models/mMember.js";
import error from "../middlewares/error.js";


const cReturn = {
    getReturnForm: (req, res) => {
        res.render("returnForm");
    },

    createReturn: async (req, res) => {
        try {
            let { id_member, id_book } = req.body; 
            let loan = await mLoan.getOne(id_member, id_book);

            await mBook.updateReturned(id_book);
            res.render("returInfo", { member, book, loan });

        } catch (err) {
            error.e500(req, res, err);
        }
    },
};


export default cReturn;
