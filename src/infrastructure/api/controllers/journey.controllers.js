import journeyModel from '../../../domain/models/Journey.model.js';
import flightModel from '../../../domain/models/flight.model.js';
class JourneyController {

    async getJourney(req, res) {
        try {
            const journeys = await journeyModel.find({});
            res.status(200).json({
                message: "Journey where gathered succesfully",
                result: journeys
            });
        } catch (error) {
            console.log(error);
            res.status(404).json({
                message: "Oops something went wrong"
            });
        }
    };

    async postJourney(req, res) {
        try {
            const {origin, destination} = req.body;
            let newJourney;
            const findFlights = await  flightModel.find({ $and: [{ origin: origin }, { destination: destination }] },{ id: 1, price: 1});
            if (findFlights.length > 0 ) {
                newJourney = new journeyModel({flights: [findFlights[0]._id], origin, destination, price: findFlights[0].price});
                await newJourney.save();

                const findCreatedJourney = await journeyModel.findById(newJourney._id, {_id: 0}).populate({
                    path: "flights",
                    select: "-_id",

                    populate: {
                        path: "transport",
                        select: "-_id",
                    }

                });

                return res.status(201).json({
                    message: "Journey created successfully",
                    result: findCreatedJourney
                });
            } else {
                const pipeline = [
                    {
                        $match: {
                            $or: [
                                { origin: origin },
                                { destination: destination }
                            ]
                        }
                    },
                    {
                        $group: {
                            _id: null,
                            flights: { $push: "$$ROOT" }
                        }
                    },
                    {
                        $project: {
                            _id: 0,
                            flights: {
                                $filter: {
                                    input: "$flights",
                                    as: "flight",
                                    cond: {
                                        $or: [
                                            { $eq: [ "$$flight.origin", origin ] },
                                            { $eq: [ "$$flight.destination", destination ] }
                                        ]
                                    }
                                }
                            }
                        }
                    }
                ];
                
                const flightsJourney = await flightModel.aggregate(pipeline);
                
                        return res.status(201).json({
                            message: "Journeys Succesfully Gathered",
                            result: flightsJourney.slice(Math.max(flightsJourney.length - 2, 0))
                        });

            };


        } catch (error) {
            console.log(error);
            res.status(404).json({
                message: "Oops something went wrong"
            });
        }

    }

};

export default JourneyController;