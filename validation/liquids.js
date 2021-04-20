
const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateLiquidInput(data) {
    let errors = {};

    data.type = validText(data.type) ? data.type : '';
    // data.amount validations for amount
    

    if (Validator.isEmpty(data.type)) {
        errors.text = 'Type field is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};