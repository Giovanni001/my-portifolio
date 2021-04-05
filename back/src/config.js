const dotenv = require('dotenv');
const convict = require('convict');
const fs = require('fs');

dotenv.config();

const config = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV',
  },
  port: {
    doc: 'The port to bind the app.',
    format: 'port',
    default: 3000,
    env: 'CX_PORT',
  },
  publicUrl: {
    doc: 'The public url',
    format: String,
    default: '/',
    env: 'CX_API_PUBLIC_URL',
  },
  db: {
    database: {
      doc: 'The name of the database',
      format: String,
      default: '',
      env: 'CX_DB_NAME',
    },
    username: {
      doc: 'The user used to connect to the database',
      format: String,
      default: '',
      env: 'CX_DB_USER',
      sensitive: true,
    },
    password: {
      doc: 'The password used to connect to the database',
      format: String,
      default: '',
      env: 'CX_DB_PASSWORD',
      sensitive: true,
    },
    dialect: {
      doc: 'The type of the database',
      format: ['mysql', 'mssql', 'mariadb', 'postgres', 'sqlite'],
      default: 'mysql',
      env: 'CX_DB_DIALECT',
    },
    host: {
      doc: 'The database server address',
      format: 'ipaddress',
      default: '127.0.0.1',
      env: 'CX_DB_HOST',
    },
    port: {
      doc: 'The port used to connect to the database',
      format: 'port',
      default: 3306,
      env: 'CX_DB_PORT',
    },
    pool: {
      max: {
        doc:
          'The max allowed open connections, this should be the number of max connections configured on the database server divided by the number of running node instances',
        format: 'nat',
        default: 25,
        env: 'CX_DB_POOL_MAX',
      },
    },
  },
  allowedOrigins: {
    doc: 'List of Authorized URLs',
    format: Array,
    default: [],
    env: 'CX_API_ALLOWED_ORIGINS',
  },
  authentication: {
    jwtSecret: {
      doc: 'The secret key used to generate the jwt token',
      format: String,
      default: null,
      env: 'CX_JWT_SECRET',
      sensitive: true,
    },
  },
  smtp: {
    host: {
      doc: 'The SMTP host',
      format: 'url',
      default: null,
      env: 'CX_API_SMTP_HOST',
    },
    port: {
      doc: 'The SMTP Port',
      format: 'port',
      default: null,
      env: 'CX_API_SMTP_PORT',
    },
    tls: {
      doc: 'The variable indicating if the SMTP uses TLS or not',
      format: Boolean,
      default: null,
      env: 'CX_API_SMTP_TLS',
    },
    user: {
      doc: 'The SMTP username',
      format: String,
      default: null,
      env: 'CX_API_SMTP_USER',
    },
    password: {
      doc: 'The SMTP password',
      format: String,
      default: null,
      env: 'CX_API_SMTP_PASSWORD',
      sensitive: true,
    },
    from: {
      name: {
        doc: 'The name to display in the FROM field of the sent email',
        format: String,
        default: null,
        env: 'CX_API_SMTP_FROM_NAME',
      },
      email: {
        doc: 'The email to display in the FROM field of the sent email',
        format: 'email',
        default: null,
        env: 'CX_API_SMTP_FROM_EMAIL',
      },
    },
  },
});

// Enable config override using scoped config files
const env = config.get('env');
const file = `./config.${env}.json`;
if (fs.existsSync(file)) {
  config.loadFile(file);
}

config.validate({ allowed: 'strict' });

module.exports = config;
