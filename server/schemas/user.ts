import { Document, Schema} from "mongoose";
import { IUser } from "../interfaces/user";
let mongooseHidden = require('mongoose-hidden')()
const Joi = require('joi');
const Mongoose = require('mongoose');
const Joigoose = require('joigoose')(Mongoose);
const Bcrypt = require("bcryptjs");

export interface IUserModel extends IUser, Document {
  fullName(): string;
}

export var UserSchema = new Mongoose.Schema(Joigoose.convert(Joi.object().keys({
  firstName: Joi.string().alphanum().min(3).max(30).required(),
  lastName: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
  email: Joi.string().email({ minDomainAtoms: 2 }),
  role: Joi.string().alphanum().min(3).max(30).required()
})));
// hidden: { password: true },
UserSchema.plugin(mongooseHidden, { unique: { email: true } })
 UserSchema.pre("save", function(next) {
 // UserSchema.email.unique = true
  if(!this.isModified("password")) {
    return next();
}
this.password = Bcrypt.hashSync(this.password, 10);
  next();
});


UserSchema.methods.fullName = function(): string {
  return (this.firstName.trim() + " " + this.lastName.trim());
};
