var mongoose = require('mongoose');
var dbURI = 'mongodb://amooabeeb:doyinabeeb@ds247317.mlab.com:47317/admission-enquiries';
mongoose.Promise = global.Promise;
var options = {
    useMongoClient: true,
    autoReconnect: true,
    autoIndex: false,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000,
    poolSize: 10
};
mongoose.connect(dbURI, options);
mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
    mongoose.disconnect();
});
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});
module.exports = mongoose;