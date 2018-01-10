
module.exports.sendSuccess = function (res) {
    res.status(200);
    res.json({status: 'success'});
};

module.exports.sendError = function (res) {
    res.status(500);
    res.json({status: 'error'});
};