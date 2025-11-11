import dotenv from "dotenv";
dotenv.config();

const env = process.env;

export const config = {
  app: {
    env: env.NODE_ENV,
    port: env.PORT,
  },
  clientSite: {
    reset_pass_ui_link: env.RESET_PASS_UI_LINK
  },
  db: {
    uri: env.DB_URI,
  },
  jwt: {
    secret: env.JWT_SECRET,
    expiresIn: env.JWT_EXPIRES_IN,
    refreshSecret: env.JWT_REFRESH_SECRET,
    refreshExpiresIn: env.JWT_REFRESH_EXPIRES_IN,
    resetSecret: env.JWT_RESET_SECRET,
    resetExpiresIN: env.JWT_RESET_EXPIRES_IN
  },
  smtp: {
    user: env.SMTP_AUTH_USER,
    pass: env.SMTP_AUTH_PASS
  }
};
