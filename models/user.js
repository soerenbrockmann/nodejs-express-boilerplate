import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const User = new Schema({});

export default mongoose.model('User', User);
