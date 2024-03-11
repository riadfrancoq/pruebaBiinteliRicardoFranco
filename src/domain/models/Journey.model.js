import { Schema, model} from "mongoose";

const journey = Schema({

    origin: String,
    destination: String,
    price: Number


});

export default model('journeys', journey);
