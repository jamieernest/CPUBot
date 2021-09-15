const nodemailer = require('nodemailer');

const { EMAIL_USER, EMAIL_PASS } = require('./globals');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS
  }
});

module.exports.send = async (email, subject, text) => {
  await transporter.sendMail({
    email,
    subject,
    text
  });
};
