import { Schema, model} from "mongoose";

const flight = Schema({

    origin: {
        type: String,
        required: [true, 'origin is required']
    },

    destination: {
        type: String,
        required: [true, 'destination is required']
    },
    price: {
        type: Number,
        required: [true, 'price is required']

    }


});

export default model('flights', flight);