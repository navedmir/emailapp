
const env = process.env.NODE_ENV|| 'dev'; // 'prod' or 'dev'

const dev = {
 app: {
   port: parseInt(process.env.DEV_APP_PORT) || 3000
 },
 emailService: {
  mailGun: {
    url: 'https://api.mailgun.net/v3/sandbox3b6dde7a31164594b22d093a126e5c73.mailgun.org/',
    api_key:'5d87d70300c1e872628c253a8311b762-0e6e8cad-ed0d4a61'
   },
   sendGrid: {
    url: 'https://api.sendgrid.com/v3/mail/',
    api_key:'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'
   }
  
  }
};


const config = {
 dev
};

module.exports = config[env];