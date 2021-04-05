const errors = require('../errors');
const { contact } = require('../database');
const { sendEmail } = require('../cross-cutting/email');

module.exports = {
  create: async (data) => {
    try {
      contact.create({
        ...data,
      });
    } catch (err) {
      throw new errors.DatabaseError(err);
    }

    try {
      await sendEmail({
        to: 'giovannimanganotti002@gmail.com',
        cc: null,
        subject: `Portifolio - ${data.subject}`,
        body: data.message,
        attachments: null,
      });
    } catch (err) {
      throw new errors.BaseError();
    }
    return true;
  },
};
