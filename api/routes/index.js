var express = require('express');
var router = express.Router();
var EnquiryController = require('../controllers/enquirycontroller');

router.post('/log', EnquiryController.log);

module.exports = router;