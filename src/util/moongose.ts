import mongoose from 'mongoose';

import { environment } from './environment';

export const connectToMongo = async () => {
  await mongoose.disconnect().catch(() => void 0);

  await mongoose.connect(environment.MONGO_DATABASE_URL);
};
