import { User, UserData, UserModel } from '../../model';
import { IUserRepository } from './types';

export class MongoUserRepository implements IUserRepository {
  private create = async (data: UserData): Promise<User> => {
    const user = await UserModel.create({ ...data });

    return user.toObject();
  };

  public findOrCreate = async (data: UserData): Promise<User> => {
    const user = await this.findByEmail(data.email);

    if (!user) {
      return this.create(data);
    }

    return user;
  };

  public findByEmail = async (email: string): Promise<User | void> => {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return;
    }

    return user.toObject();
  };

  public findById = async (id: string): Promise<User | void> => {
    const user = await UserModel.findById(id);

    if (!user) {
      return;
    }

    return user.toObject();
  };
}

export const mongoUserRepository = new MongoUserRepository();
