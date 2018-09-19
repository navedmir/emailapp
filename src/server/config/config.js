
const env = process.env.NODE_ENV|| 'dev'; // 'prod' or 'dev'

const dev = {
 app: {
   port: parseInt(process.env.DEV_APP_PORT) || 3000
 },
 emailService: {
  mailGun: {
    url: 'https://api.mailgun.net/v3/sandbox3b6dde7a31164594b22d093a126e5c73.mailgun.org/',
    api_key:''
   },
   sendGrid: {
    url: 'https://api.sendgrid.com/v3/mail/',
    api_key:''
   }
  
  }
};


const config = {
 dev
};

module.exports = config[env];