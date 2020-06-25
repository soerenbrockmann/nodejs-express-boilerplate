import User from '../models/user';
export const getUsers = async () => await User.find({});
