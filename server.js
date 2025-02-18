import express from 'express';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';



const app = express();


app.get('/', (req, res) => {
  return res.status(200).json([11, 22, 44, 55]);
});


app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);





app.listen(5000, () => {
  console.log('listening');
});
