const request = require('request'),
  appConfig = require('../config/config');

exports.sendEmail = async function (reqBody) {

  let options = {
    url: appConfig.emailService.mailGun.url + 'messages',
    auth: {
      user: 'api',
      password: appConfig.emailService.mailGun.api_key
    },
    form: {
      from: reqBody.from,
      to: reqBody.to.toString(),
      subject: reqBody.subject,
      text: reqBody.text
    }
  }
//Add only when there is cc or bcc
  if (reqBody.cc)
    options.form.cc = reqBody.cc.toString();
  if (reqBody.bcc)
    options.form.bcc = reqBody.bcc.toString();
  

  return new Promise(resolve => {
    request.post(options, function (error, response, body) {
      resolve({ "error": error, "statusCode": response && response.statusCode, "body": body });
    });
  });
}
