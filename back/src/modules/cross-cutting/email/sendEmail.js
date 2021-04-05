const nodemailer = require('nodemailer');
const config = require('./config');

const transporter = nodemailer.createTransport(config.transporter);

const sendEmail = async ({ to, cc, subject, body, attachments }) => {
  const mailOptions = {
    from: `${config.from.name} <${config.from.email}>`,
    to,
    cc,
    subject,
    html: body,
    attachments,
  };

  await transporter.sendMail(mailOptions);
  return true;
};

module.exports = sendEmail;
