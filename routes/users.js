import express from 'express';

import { resolveGetUserController } from '../controllers/users';

const router = express.Router();
router.get('/', resolveGetUserController);

export default router;
