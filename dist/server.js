"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const app_1 = require("./app");
const env_config_1 = require("./config/env.config");
const app = new app_1.App().app;
const PORT = env_config_1.config.app.port;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
