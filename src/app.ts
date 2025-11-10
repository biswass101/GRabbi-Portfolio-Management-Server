import express, { Application } from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.config";
import routes from "./routes";
import { globalErrorHanlder } from "./shared/middlewares/globalErrorHandler";


export class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
    connectDB();
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: true}))
  }

  private routes(): void {
    this.app.use("/api/v1", routes);
    this.app.use(globalErrorHanlder);
  }
}
