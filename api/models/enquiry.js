var mongoose = require('../config/db');

var EnquirySchema = new mongoose.Schema({
    message: {
        type: String, required: true, minlength: 1
    },
    ip: {
        type: String, required: true, minlength: 1
    },
    created_at: {type: Date, default: Date.now()}
});

EnquirySchema.pre('save', function(next) {
    var current_date = new Date();
    if (!this.created_at) {
        this.created_at = current_date;
    }
    next();
});

module.exports = mongoose.model('Enquiry', EnquirySchema);