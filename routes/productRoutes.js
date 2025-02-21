import express from 'express';
import { addProduct, getAllProducts, getProduct, removeProduct, updateProduct } from '../controllers/productController.js';
import { fileCheck, updateFileCheck } from '../middlewares/fileCheck.js';
import { productSchema, validate } from '../utils/validators.js';


const router = express.Router();



router.route('/').get(getAllProducts).post(validate.body(productSchema), fileCheck, addProduct);

router.route('/:id').get(getProduct).patch(updateFileCheck, updateProduct).delete(removeProduct);





export default router;



