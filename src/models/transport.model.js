import { Schema, model} from "mongoose";

const transport = Schema({

    flightCarrier: {
        type: String,
        required: [true, 'flightCarrier is required']
    },

    flightNumber: {
        type: String,
        required: [true, 'flightNumber is required']
    }


});

export default model('transports', transport);