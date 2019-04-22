import { Document, Schema} from "mongoose";
import { IUser } from "../interfaces/user";
let mongooseHidden = require('mongoose-hidden')()
const Joi = require('joi');
const Mongoose = require('mongoose');
const Joigoose = require('joigoose')(Mongoose);

export interface IUserModel extends IUser, Document {
  fullName(): string;
}

// export var UserSchema: Schema = new Schema({
//   createdAt: Date,
//   email: String,
//   firstName: String,
//   lastName: String,
//   password: { type: String, hideJSON: true }
// });
export var UserSchema = new Mongoose.Schema(Joigoose.convert(Joi.object().keys({
  firstName: Joi.string().alphanum().min(3).max(30).required(),
  lastName: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
  email: Joi.string().email({ minDomainAtoms: 2 })
})));
//UserSchema.plugin(mongooseHidden)
 UserSchema.pre("save", function(next) {
 
//   next();
// });

UserSchema.methods.fullName = function(): string {
  return (this.firstName.trim() + " " + this.lastName.trim());
};
