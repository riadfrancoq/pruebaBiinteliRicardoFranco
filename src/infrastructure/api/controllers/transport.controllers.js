import transportModel from '../../../domain/models/transport.model.js';

class TransportController {

    async getTransports(req, res) {
        try {
            const transports = await transportModel.find({});
            res.status(200).json({
                message: "Transports where gathered succesfully",
                result: transports
            });
        } catch (error) {
            console.log(error);
            res.status(404).json({
                message: "Oops something went wrong"
            });
        }
    };

    async postTransport(req, res) {
        try {
            const {flightCarrier, flightNumber} = req.body;

            const newTransport = new transportModel({flightCarrier, flightNumber});
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

export default TransportController;