import { getModelForClass, prop } from '@typegoose/typegoose';

import { MongoBase } from './base';

export class User extends MongoBase {
  @prop()
  name!: string;

  @prop()
  email!: string;

  @prop()
  active!: boolean;
}

export const UserModel = getModelForClass(User);

export type UserData = Omit<User, keyof MongoBase>;
