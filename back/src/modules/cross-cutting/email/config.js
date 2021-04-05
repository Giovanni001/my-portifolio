const config = require('../../../config');

module.exports = {
  transporter: {
    host: config.get('smtp.host'),
    port: config.get('smtp.port'),
    secure: config.get('smtp.tls'),
    auth: {
      user: config.get('smtp.user'),
      pass: config.get('smtp.password'),
    },
  },
  from: {
    name: config.get('smtp.from.name'),
    email: config.get('smtp.from.email'),
  },
};
