import { config } from "dotenv";
config();

export const configDB = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI
};