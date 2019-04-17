import { Document, Schema} from "mongoose";
import { IUser } from "../interfaces/user";

export interface IUserModel extends IUser, Document {
  fullName(): string;
}

export var UserSchema: Schema = new Schema({
  createdAt: Date,
  email: String,
  firstName: String,
  lastName: String,
  password: String
});
UserSchema.pre("save", function(next) {
 
  next();
});
UserSchema.methods.fullName = function(): string {
  return (this.firstName.trim() + " " + this.lastName.trim());
};
