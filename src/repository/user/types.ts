import { User, UserData } from '../../model';

export interface IUserRepository {
  findOrCreate: (data: UserData) => Promise<User>;
  findByEmail: (email: string) => Promise<User | void>;
  findById: (id: string) => Promise<User | void>;
}
