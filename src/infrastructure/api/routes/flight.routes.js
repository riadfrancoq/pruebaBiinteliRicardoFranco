import { Router } from "express";
import FlightsControllers from "../controllers/flight.controllers.js";

const flightsControllers = new FlightsControllers();
const {getFlights, postFlights} = flightsControllers;
const router = Router();

router.get('/flights', getFlights);
router.post('/flights', postFlights);

export default  router;