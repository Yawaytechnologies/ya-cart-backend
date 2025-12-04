import dotenv from "dotenv";
dotenv.config();
const config = {
    dbUrl: process.env.DB_URL,
    port: process.env.PORT
};
export default config;