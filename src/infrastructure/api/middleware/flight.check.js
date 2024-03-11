import flightModel from "../../../domain/models/flight.model.js";

export class DestinationCheck {
    async destinationCheck(destination) {
        try {

            const checkDestination = await flightModel.find({destination});
            if (checkDestination.length === 0) {
                throw new Error("Destination wasn't found");
            }
        } catch (error) {
            console.log(error);
            throw new Error("Destination wasn't found");
        }
    };
}


export class OriginCheck {
    async originCheck(origin) {
        try {

            const checkOrigin = await flightModel.find({origin});
            if (checkOrigin.length === 0) {
                throw new Error("Origin wasn't found");
            }
        } catch (error) {
            console.log(error);
            throw new Error("Origin wasn't found");
        }
    };
}