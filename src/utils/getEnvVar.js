import 'dotenv/config';

export const getEnvVar = (name, defaultValue) => {
  const value = process.env[name];
  if (!value) {
    return defaultValue;
  }
  return value;
};
