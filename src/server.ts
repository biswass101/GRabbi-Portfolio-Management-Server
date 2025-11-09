import "reflect-metadata";
import { App } from './app'

const app = new App().app


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost${PORT}`);
});