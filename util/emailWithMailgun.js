const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
const sendMail = ({ subject, email, message }, cb) => {
  const auth = {
    auth: {
      api_key: process.env.apiKey,
      domain: process.env.domain,
    },
  };
  let transporter = nodemailer.createTransport(mailGun(auth));

  const mailOptions = {
    from: email.trim(),
    to: process.env.to,
    subject: subject.trim(),
    text: message.trim(),
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      cb(error, null);
    } else {
      cb(null, info);
    }
  });
};
module.exports = { sendMail };
