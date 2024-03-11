import { Router } from "express";
import TransportsControllers from "../controllers/transport.controllers.js";

const transportsControllers = new TransportsControllers();
const router = Router();

router.get('/transports', transportsControllers.getTransports);

export default  router;