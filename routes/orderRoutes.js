import express from 'express';
import { createOrder, getOrderById, getOrderByUser, getOrders } from '../controllers/orderController.js';



const router = express.Router();


router.route('/').get(getOrders).post(createOrder);
router.route('/users/:id').get(getOrderByUser);
router.route('/:id').get(getOrderById);



export default router;