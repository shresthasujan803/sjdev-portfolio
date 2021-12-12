const nodemailer = require('nodemailer');

const sendMail = ({ name, email, message }, res) => {
  let transporter = nodemailer.createTransport({
    host: process.env.host,
    port: process.env.port,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  const mailOptions = {
    from: email,
    to: 'shresthasujan845@gmail.com',
    subject: `Message from the Portfolio:${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.status(500).send({ message: error.message });
    } else {
      res.status(200).send({ message: 'Mail had sent' });
    }
  });
};
module.exports = { sendMail };
