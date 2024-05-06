/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/send-email", async (req, res) => {
  let { name, email, message } = req.body;


  let transporter = nodemailer.createTransport({
    host: "host11.registrar-servers.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "info@thecondorvision.com",
      pass: "thecondorvision2024",
    },
  });

  let mailOptions = {
    from: 'info@thecondorvision.com',
    to: email,
    cc: "ceci@thecondorvision.com",
    subject: "Contact Form Message",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    res.status(500).send("Error occurred: " + error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});