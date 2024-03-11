import { Router } from "express";
import { check } from "express-validator";
import validateDocuments from "../middleware/validate.documents.js";
import JourneysControllers from "../controllers/journey.controllers.js";
import {DestinationCheck, OriginCheck} from "../middleware/flight.check.js";
import JourneyCheck from "../middleware/journey.check.js";

const {checkJourney} = new JourneyCheck();
const {destinationCheck} = new DestinationCheck();
const {originCheck} = new OriginCheck();

const {getJourney, postJourney} = new JourneysControllers();
const router = Router();

router.get('/journeys',getJourney);
router.post('/journeys',[
    check("origin").notEmpty().withMessage("origin is required").bail().isString().withMessage("origin must be a string").bail().custom(originCheck).withMessage("origin wasn't found"),
    check("destination").notEmpty().withMessage("destination is required").bail().isString().withMessage("Destination must be a string").bail().custom(destinationCheck).withMessage("destination wasn't found"),
    checkJourney,
    validateDocuments
],postJourney);

export default  router;