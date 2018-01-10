var Response = require('../util/response');
var Enquiry = require('../models/enquiry');

module.exports.log = function(req, res, next) {
    var enquiry = new Enquiry({
        message: req.body.message,
        ip: req.ip
    });
    enquiry.save().then(function(doc){
        return Response.sendSuccess(res)
    },function(err){
        return Response.sendError(res);
    });
};