import { Schema, model} from "mongoose";

const journey = Schema({

    flights: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: "flights",
        }],
        validate: {
            validator: (value) => {
                // Check if flights array is not empty
                return value && value.length > 0;
            },
            message: 'At least one flight is required'
        }
    },
    origin: {
        type: String,
        required: [true, "origin is required"]
    },
    destination: {
        type: String,
        required: [true, "destination"]
    },
    price: {
        type: Number,
        required: [true, 'price is required']
    }


});

export default model('journeys', journey);
