declare module "cookie-parser";
declare module "cors";
declare module "jsonwebtoken";
declare module "bcrypt";
declare module "streamifier";
declare module "nodemailer";

import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      file?: any;
      files?: any;
    }
  }
}
