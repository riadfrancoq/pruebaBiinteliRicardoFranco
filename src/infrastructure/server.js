import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import DatabaseConnection from './db/db.js';
import { configDB } from './config/config.js';
import transportRoute from './api/routes/transport.routes.js';
import flightRoute from './api/routes/flight.routes.js';
import journeyRoute from './api/routes/journey.routes.js';
import rateLimitMiddleware from './api/middleware/rate.limiter.js';
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
        this.app.use(rateLimitMiddleware);
    }

    routes() {
        this.app.use(this.api, transportRoute);
        this.app.use(this.api, flightRoute);
        this.app.use(this.api, journeyRoute);
    }

    listen() {
        this.app.listen(process.env.PORT, ()=> {
            console.log(`Server running on port ${PORT}`);
        });
    }


};


export default Server;