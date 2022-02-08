const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();

const contactAddress = "docket@remarkable.legal"

// Middleware
app.use(express.json());
app.use(cors());

let transporter = nodemailer.createTransport({
  host: 'smtp.migadu.com',
  port: 587,
  auth: {
    user: 'docket@remarkable.legal',
    pass: '4h7Q8n--TCgMb'
  }
});

transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take messages: ${success} ===`);
});

export default function formHandler(req, res) {
  const mailOptions = {
    from: [contactAddress],
    to: [contactAddress],
    subject: `Email from Breanlaw.legal: ${req.body.mailerState.subject}, ${req.body.mailerState.email}`,
    text: `${req.body.mailerState.email}`,
    html: `<p>Name: ${req.body.mailerState.FName} ${req.body.mailerState.LName}</p>
      <p>Email: ${req.body.mailerState.email}</p>
      <p>Phone Number: ${req.body.mailerState.phone}</p>
      <p>Message: ${req.body.mailerState.message}</p>
      `
  };
  if (req.method === `POST`) {
    transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
        res.json({
          status: "fail",
        });
      } else {
        console.log("== Message Sent ==");
        res.json({
          status: "success",
        });
      }
    });
  } else {
    console.log("else condition")
  }
}