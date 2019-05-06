const Joi = require('joi');
export class carecenterValidate {
    async validateRegister(data: any){
        const schema = Joi.object().keys({
            password: Joi.string().regex(/^[a-zA-Z0-9]{6,16}$/).min(6).required(),
            userName: Joi.string().required(),
            email: Joi.string().email().required(),
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            phoneNumber: Joi.number().required(),
            centerName: Joi.string().required(),
            centerType: Joi.number().required(),
            licenseNumber: Joi.string().required(),
            centerPhoneNumber: Joi.number().required(),
            waitingTime: Joi.number().required(),
            address1: Joi.string().required(),
            address2: Joi.string(),
            city: Joi.string().required(),
            state: Joi.string().required(),
            longitude: Joi.number().required(),
            latitude: Joi.number().required(),
            zipCode: Joi.number().required(),
            businessDays: Joi.string().required(),
            serviceId: Joi.number().required(),
            cost: Joi.number().required(),
        });
        const { value, error } = Joi.validate(data, schema);
       
        if (error && error.details) {
             data = {error: true, message: error.details[0].message };
            return data ;
        } else {
            return value;
        }
    }

    async validateLogin(data: any){
        const schema = Joi.object().keys({
            password: Joi.string().regex(/^[a-zA-Z0-9]{6,16}$/).min(6).required(),
            userName: Joi.string().required(),
        });
        const { value, error } = Joi.validate(data, schema);
       
        if (error && error.details) {
             data = {error: true, message: error.details[0].message };
            return data ;
        } else {
            return value;
        }
    }

    async validateForgot(data: any){
        const schema = Joi.object().keys({
            email: Joi.string().email().required(),
            role: Joi.string()
        });
        const { value, error } = Joi.validate(data, schema);
       
        if (error && error.details) {
             data = {error: true, message: error.details[0].message };
            return data ;
        } else {
            return value;
        }
    }
}

export default new carecenterValidate();