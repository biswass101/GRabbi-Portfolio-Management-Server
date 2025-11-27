import express, { Application } from "express";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/db.config";
import cors from "cors";
import routes from "./routes";
import { globalErrorHanlder } from "./shared/middlewares/globalErrorHandler";
import notFound from "./shared/middlewares/notFound";

export class App {
  public app: Application;

  constructor() {
    this.app = express();
    connectDB();
    this.config();
    this.routes();
    this.middlewares();
  }

  private config(): void {
    this.app.use(
      cors({
        origin: ["http://localhost:8080", 
          "http://localhost:8081",
          "https://manage-grabbi.vercel.app", 
          "https://grabbi.vercel.app", "https://grabbi-manage.onrender.com"],
        credentials: true,
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
      })
    );
    this.app.use(express.json());
    this.app.use(cookieParser());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private routes(): void {
    this.app.use("/api/v1", routes);
  }

  private middlewares(): void {
    this.app.use(notFound);
    this.app.use(globalErrorHanlder);
  }
}
