import express from 'express';
import { addToCart, getUserCart, updateCart } from '../controller/cartController.js';
import isAuth from '../middleware/isAuth.js';

const router = express.Router();   // sirf ek router banao

// Routes
router.post('/get', isAuth, getUserCart);
router.post('/add', isAuth, addToCart);
router.post('/update', isAuth, updateCart);

export default router;   // router ko export karo
