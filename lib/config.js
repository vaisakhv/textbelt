const SENDMAIL_TRANSPORT = {
  // This transport uses the local sendmail installation.
  sendmail: true,
  newline: 'unix',
  path: '/usr/sbin/sendmail',
};

const SMTP_TRANSPORT = {
  // This is a Nodemailer transport. It can either be an SMTP server or a
  // well-known service such as Sengrid, Mailgun, Gmail, etc.
  // See https://nodemailer.com/transports/ and https://nodemailer.com/smtp/well-known/
//   host: 'smtp.example.com',
   host: 'airtelmail.com',
//   port: 587,
  auth: {
    user: '919686613355@airtelmail.com',
    pass: 'something else',
  },
  secureConnection: 'false',
  tls: {
    ciphers: 'SSLv3',
  },
};

module.exports = {
  transport: SMTP_TRANSPORT,
  mailOptions: {
    from: '"Vaisakh" <vais27@gmail.com>',
  },
  debugEnabled: false,
};
