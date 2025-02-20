import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['electronics', 'jewelery', 'men\'s clothing', 'women\'s clothing', 'other'],
    required: true
  },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
export default Product;