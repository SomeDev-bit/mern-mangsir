import express from 'express';
import { addProduct, getAllProducts, getProduct, removeProduct, updateProduct } from '../controllers/productController.js';
import { fileCheck, updateFileCheck } from '../middlewares/fileCheck.js';
import { productSchema, validate } from '../utils/validators.js';
import { adminCheck, authCheck } from '../middlewares/authCheck.js';


const router = express.Router();



router.route('/').get(getAllProducts).post(authCheck, adminCheck, validate.body(productSchema), fileCheck, addProduct);

router.route('/:id').get(getProduct).patch(authCheck, adminCheck, updateFileCheck, updateProduct).delete(authCheck, adminCheck, removeProduct);





export default router;



