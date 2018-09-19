const   express = require('express'),
        router  = express.Router(),
        email_controller = require('../controllers/email');


//handle sendEmail post request
router.post('/sendEmail', email_controller.sendEmail);    

module.exports = router;