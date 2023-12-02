import express from 'express';
import { test, userUpdate } from '../controllers/user.controller.js';
import { verifyToken } from '../utilities/verifyUser.js';


const router = express.Router();

router.get('/test', test);
router.post('/update/:id', verifyToken, userUpdate);

export default router;