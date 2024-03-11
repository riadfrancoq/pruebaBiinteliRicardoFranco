import { Router } from "express";
import TransportsControllers from "../controllers/transport.controllers.js";

const transportsControllers = new TransportsControllers();
const {getTransports, postTransport} = transportsControllers;
const router = Router();

router.get('/transports', getTransports);
router.post('/transports', postTransport);

export default  router;