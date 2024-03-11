import flightModel from '../../../domain/models/flight.model.js';


class FlightController {

    async getFlights(req, res) {
        try {
            const flights = await flightModel.find({});
            res.status(200).json({
                message: "Transports where gathered succesfully",
                result: flights
            });
        } catch (error) {
            console.log(error);
            res.status(404).json({
                message: "Oops something went wrong"
            });
        }
    };

    async postFlights(req, res) {
        try {
            const {transport, origin, destination, price} = req.body;

            const newFlight = new flightModel({transport, origin, destination, price});
            await newFlight.save();
            res.status(201).json({
                message: "Flight was created succesfully",
                result: newFlight
            });

        } catch (error) {
            console.log(error);
            res.status(404).json({
                message: "Oops something went wrong"
            });
        }

    }

};

export default FlightController;