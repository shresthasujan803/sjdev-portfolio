const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const { sendMail } = require('./util/emailWithMailgun');

//Use express middleware
app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.post('/api/portfolio/email', async (req, res) => {
  const { userInput } = req.body;
  sendMail(userInput, function (error, info) {
    if (error) {
      res.status(500).send({ message: error.message });
    } else {
      res.status(200).send({ message: 'Mail had sent' });
    }
  });
});

let port = process.env.PORT;
if (port == null || port == '') {
  port = 8000;
}

app.listen(port, (err) => {
  if (err) console.log('error: ', err);
  console.log(`listening on http://localhost:${port}`);
});
