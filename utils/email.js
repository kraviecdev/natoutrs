const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  //create transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASS,
    },
  });

  //define email options
  const mailOptions = {
    from: "Pat KRAK <patrick@mail.pl>",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  //send email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
