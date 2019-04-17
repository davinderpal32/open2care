import { Model } from "mongoose";
import { IUserModel } from "./users";

export interface IModel {
  user: Model<IUserModel>;
}