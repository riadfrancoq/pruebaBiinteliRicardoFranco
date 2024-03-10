import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';

config();
class Server {

    constructor() {
        this.app = express();
        this.api = '/api';
        this.middlewares();
        this.routes();
    }


    middlewares() {
        this.app.use(express.json());
        this.app.use(cors());
    }

    routes() {
        this.app.use(this.api, );
        this.app.use(this.api, );
    }

    listen() {
        this.app.listen(process.env.PORT, ()=> {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    }


};


export default Server;