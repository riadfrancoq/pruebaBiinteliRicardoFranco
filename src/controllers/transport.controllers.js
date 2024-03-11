import transportModel from '../models/transport.model.js';

class transportController {

    async getTransports(req, res) {
        try {
            res.status(200).json({
                result: "sexo"
            });
        } catch (error) {
            console.log(error);
            res.status(404).json({
                message: "Oops something went wrong"
            });
        }
    };

    async postTransport() {

    }

};

export default transportController;