import express from 'express';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import 'dotenv/config';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';

const app = express();

mongoose.connect(process.env.MONGO_URI).then((val) => {
  app.listen(5000, () => {
    console.log('Database connected and listening');
  });
}).catch((err) => {
  console.log(err);
});

app.use(express.json());
app.use(fileUpload({
  limits: { fileSize: 5 * 1024 * 1024 },
  abortOnLimit: true
}));

app.use(express.static('uploads'));
app.get('/', (req, res) => {
  return res.status(200).json([11, 22, 44, 55]);
});


app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);





