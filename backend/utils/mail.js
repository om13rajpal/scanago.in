const nodemailer = require("nodemailer");
const { EMAIL, PASSWORD } = require("../config/config");

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
});

function sendMail(to, subject, message) {
  transport
    .sendMail({
      from: EMAIL,
      to: to,
      subject: subject,
      html: message,
    })
    .then(() => {
      console.log("Email sent successfully");
    })
    .catch((err) => {
      console.error("Error sending email: ", err);
    });
}

module.exports = {
  sendMail,
};
