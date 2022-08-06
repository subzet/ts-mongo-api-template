import { connectToMongo } from './moongose';

export const setupDatabase = async () => {
  await connectToMongo();
};
