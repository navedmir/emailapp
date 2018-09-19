const request = require('request'),
    appConfig = require('../config/config');


exports.sendEmail = async function (reqBody) {
    // sendGrid message content
    let emailRequestBody = {
        "personalizations": [
            { "to": multipleRecipents(reqBody.to) }],
        "from": { "email": reqBody.from },
        "subject": reqBody.subject,
        "content": [{
            "type": "text/plain",
            "value": reqBody.text
        }]
    };

    //add cc & bcc if only there is cc and bcc in the request
    if (reqBody.cc && reqBody.cc.length > 0) {
        emailRequestBody.personalizations[0].cc = multipleRecipents(reqBody.cc);
    }
    if (reqBody.bcc && reqBody.bcc.length > 0) {
        emailRequestBody.personalizations[0].bcc = multipleRecipents(reqBody.bcc);
    }

    var options = {
        url: appConfig.emailService.sendGrid.url + 'send',
        auth: {
            'bearer': appConfig.emailService.sendGrid.api_key
        },
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailRequestBody)
    };

    return new Promise(resolve => {
        request.post(options, function (error, response, body) {
            resolve({ "error": error, "statusCode": response && response.statusCode, "body": body });
        });
    });
}


//this helper function will split emails into objects and will return in an array
let multipleRecipents = (emailArray) => {
    let arr = [];
    emailArray.forEach(element => {
        arr.push({ "email": element });
    });
    return arr;
}