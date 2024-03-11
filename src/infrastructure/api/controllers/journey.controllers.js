import journeyModel from '../../../domain/models/Journey.model.js';

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
            const {origin, destination, price} = req.body;
            const newTransport = new journeyModel({origin, destination, price});
            await newTransport.save();
            res.status(201).json({
                message: "Transport was created succesfully",
                result: newTransport
            });

        } catch (error) {
            console.log(error);
            res.status(404).json({
                message: "Oops something went wrong"
            });
        }

    }

};

export default JourneyController;