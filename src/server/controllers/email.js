//Get email service modules
const mailGun = require('./mailGun'),
    sendGrid = require('./sendGrid');

//array containing all service providers
let emailService = [mailGun, sendGrid]

// sort of a router for selecting service, it selects a random service and uses that,if the selected service returns 
//error and it tries the next one, until all the services are tried after which it will return an error.

exports.sendEmail = async function (req, res, next) {
    let sp = getRandomEmailService(emailService);
    let message = '';

//    iterate through service providers and check which works
    for (let i = 0; i < sp.length; i++) {
        let emailResponse = await sp[i].sendEmail(req.body);
        //This could have been better, a quick hack as mailgun doesn't return any error for wrong api key
        if (emailResponse.statusCode == 202 || emailResponse.statusCode == 200) {
            message = 'Email Sent!'
            break;
        }
        //if its the last service and still doesn't work send error
        else if (i == sp.length - 1) {
            message = 'Error';
        }
    }
    return res.send({emailResponse:message});
};


//this function takes an array and shuffles it.
function getRandomEmailService(array) {
    let m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}