import dotenv from "dotenv";
dotenv.config();

const env = process.env;

export const config = {
  app: {
    env: env.NODE_ENV,
    port: env.PORT,
  },
  db: {
    uri: env.DB_URI,
  },
  jwt: {
    secret: env.JWT_SECRET,
    expiresIn: env.JWT_EXPIRES_IN,
  },
};
