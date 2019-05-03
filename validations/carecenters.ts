const Joi = require('joi');
export class carecenterValidate {
    async validate(data: any){
        const schema = Joi.object().keys({
            password: Joi.string().required(),
            userName: Joi.string().required(),
            email: Joi.string().email().required(),
            firstName: Joi.string().required(),
            lastName: Joi.boolean().required(),
            phoneNumber: Joi.string().required(),
            speciality: Joi.string().required(),
            resettoken:Joi.string().required(),
            role: Joi.string().required()
        });
        // return schema;
        const { value, error } = Joi.validate(data, schema);
        if (error && error.details) {
            
            console.log(error);
            return error.details.message ;
        } else {
            return value;
        }
    }
}

export default new carecenterValidate();