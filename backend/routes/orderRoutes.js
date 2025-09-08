import express from 'express';
import { allOrders, placeOrder, updateStatus, userOrders } from '../controller/orderController.js';
import  isAuth  from '../middleware/isAuth.js';
import adminAuth from '../middleware/adminAuth.js';

const orderRoutes = express.Router();

orderRoutes.post('/placeorder', isAuth, placeOrder)
orderRoutes.post('/list', isAuth, userOrders)

orderRoutes.post('/userorder', adminAuth, allOrders)
orderRoutes.post('/status', adminAuth, updateStatus)

export default orderRoutes;