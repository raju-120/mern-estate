import express from 'express';
import { test, userDelete, userUpdate } from '../controllers/user.controller.js';
import { verifyToken } from '../utilities/verifyUser.js';


const router = express.Router();

router.get('/test', test);
router.post('/update/:id', verifyToken, userUpdate);
router.delete('/delete/:id', verifyToken, userDelete);

export default router;