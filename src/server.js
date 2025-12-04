
import app from "./app.js"
import config from "./config/env.js"
import connectDB from "./config/db.js"

function startServer() {
    app.listen(config.port, () => {
        console.log(`Server is running on ✨"http://localhost:${config.port}"✨`);
    });
    connectDB();
}

startServer();