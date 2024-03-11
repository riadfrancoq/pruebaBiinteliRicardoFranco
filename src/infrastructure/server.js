import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import DatabaseConnection from './db/db.js';
import { configDB } from './config/config.js';
import transportRoute from './api/routes/transport.routes.js';

const {MONGO_URI, PORT} = configDB;
config();
class Server {
    constructor() {
        this.app = express();
        this.api = '/api';
        this.middlewares();
        this.routes();
         this.db = new DatabaseConnection(MONGO_URI);
    }


    middlewares() {
        this.app.use(express.json());
        this.app.use(cors());
    }

    routes() {
        this.app.use(this.api, transportRoute);
        //this.app.use(this.api, );
    }

    listen() {
        this.app.listen(process.env.PORT, ()=> {
            console.log(`Server running on port ${PORT}`);
        });
    }


};


export default Server;