const Validator = require('validator');
const validText = require('./valid-text');
const validNumber = require('./valid-number');

module.exports = function validateLiquidInput(data) {
    let errors = {};

    data.type = validText(data.type) ? data.type : '';
    data.amount = validNumber(data.amount) ? data.amount : '';
    

    if (Validator.isEmpty(data.type)) {
        errors.text = 'Type field is required';
    }

     if (Validator.isEmpty(data.amount)) {
        errors.text = 'Type amount is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};