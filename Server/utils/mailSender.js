const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
  try {
    let transpoter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    let info = transpoter.sendMail({
      from: "StudyNotion || CodeHelp - Love Babbar",
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`,
    });
    // console.log(info);
    return info;
  } catch (err) {
    console.log("error: ", err);
  }
};

module.exports = mailSender;
