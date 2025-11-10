import "reflect-metadata";
import { App } from './app'
import { config } from "./config/env.config";

const app = new App().app


const PORT = config.app.port;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});