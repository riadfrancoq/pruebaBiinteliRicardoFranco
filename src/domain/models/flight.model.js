import { Schema, model, Types} from "mongoose";

const flight = Schema({
    transport: {
        type: Types.ObjectId,
        ref: "transports",
        required: [true, "transport is required"]
    },
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