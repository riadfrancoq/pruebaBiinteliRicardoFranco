import mongoose from 'mongoose';

class DatabaseConnection {
    constructor(mongoURI) {
        this.mongoURI = mongoURI;
    }

    async connect() {
        try {
            await mongoose.connect(this.mongoURI, {
            });
            console.log('Database Online');
        } catch (error) {
            console.error(error);
            throw new Error(`Database couldn't be launched`);
        }
    }
}

export default DatabaseConnection;