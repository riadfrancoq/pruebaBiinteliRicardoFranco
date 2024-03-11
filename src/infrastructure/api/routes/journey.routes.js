import { Router } from "express";
import { check } from "express-validator";
import validateDocuments from "../middleware/validate.documents.js";
import JourneysControllers from "../controllers/journey.controllers.js";

const journeysControllers = new JourneysControllers();
const { getJourney, postJourney} = journeysControllers;
const router = Router();

router.get('/journeys',getJourney);
router.post('/journeys',[
    // check("origin").notEmpty().withMessage("origin is required").bail().isString().withMessage("origin must be a string"),
    // check("destination").notEmpty().withMessage("destination is required").bail().isString().withMessage("Destination must be a string"),
    // check("price").notEmpty().withMessage("destination is required").bail().isInt().withMessage("Destination must be a string"),
    // validateDocuments
],postJourney);

export default  router;