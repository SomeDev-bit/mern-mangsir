import express from 'express';
import { addProduct, getAllProducts, getProduct, removeProduct, updateProduct } from '../controllers/productController.js';


const router = express.Router();



router.route('/').get(getAllProducts).post(addProduct);

router.route('/:id').get(getProduct).patch(updateProduct).delete(removeProduct);





export default router;



