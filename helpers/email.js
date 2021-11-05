const nodemailer = require('nodemailer');


function createTransporter(config) {
    let transporter = nodemailer.createTransport(config);
    return transporter;
}

const defaultConfig = {
    // service: "hotmail",
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
        user:process.env.email,
        pass: process.env.epassword
    }
};


module.exports = {
    sendMail: async (email) => {
        const transporter = createTransporter(defaultConfig);
        await transporter.verify();
        await transporter.sendMail(email);
    }
};