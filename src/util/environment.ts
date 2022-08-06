export function getEnvironment<T = string>(key: string, defaultValue?: T): T {
  return (process.env[key] ?? defaultValue ?? '') as T;
}

export const environment = {
  NODE_ENV: getEnvironment('NODE_ENV', 'development'),
  GIT_SHA: getEnvironment('GIT_SHA'),
  DEMO: getEnvironment('DEMO') === 'true',
  LOCAL: false,
  DEV: false,
  TEST: false,
  PROD: false,
  MONGO_DATABASE_URL: getEnvironment(
    'MONGO_DATABASE_URL',
    'mongodb://mongouser:mongopass@localhost:27017/split_local?authSource=admin'
  ),
  PORT: 8080,
};

environment.LOCAL = !environment.GIT_SHA;
environment.TEST = process.env.NODE_ENV === 'test';
