import JourneyModel from "../../../domain/models/Journey.model.js";

export default class JourneyCheck {

    async checkJourney(req, res, next) {
        try {
            const {origin, destination} = req.body;

            const checkJourneys = await JourneyModel.find({origin, destination}, {_id: 0}).populate({
                path: "flights",
                select: "-_id",
                populate: {
                    path: "transport",
                    select: "-_id",

                }

            });
            console.log(checkJourneys)
            if (checkJourneys.length > 0 ) {
                return res.status(200).json({
                    message: "Journey already exists ",
                    result: checkJourneys
                });
            }
            next();
        } catch (error) {
            console.log(error);
            res.status(404).json({
                message: "Oops something went wrong"
            });
        }
    }

};