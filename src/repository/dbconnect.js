import mongoose from 'mongoose';
import logger from 'loglevel';
import { mongouri } from '../../config';

async function connectMongooseDb() {
    let isSukses = false;
    try {
        await mongoose.connect(mongouri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isSukses = true;
        return Promise.resolve(isSukses);
    } catch (err) {
        logger.error(err);
        return Promise.reject(new Error(err));
    }
}

export default connectMongooseDb;