import { getUsers } from '../services/users';

export const resolveGetUserController = async (req, res) => {
  try {
    const users = await getUsers();
    res.statusCode = 200;
    res.setHeader('Content-Tyoe', 'application/json');
    res.json({ users });
  } catch (err) {
    res.statusCode = 500;
    res.setHeader('Content-Tyoe', 'application/json');
    res.json({ err });
  }
};
