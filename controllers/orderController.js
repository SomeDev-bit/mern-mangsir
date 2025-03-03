import Order from "../models/Order.js"
import User from "../models/User.js";



export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({}).sort('createdAt: -1');
    return res.status(200).json(orders);
  } catch (err) {

    return res.status(400).json({ message: `${err}` });

  }
}


export const getOrderById = async (req, res) => {

}

export const getOrderByUser = async (req, res) => {

  try {

    const userOrders = await User.find({ userId: req.userId });
    return res.status(200).json(userOrders);
  } catch (error) {

    return res.status(400).json({ message: `${err}` });

  }

}

export const createOrder = async (req, res) => {
  const { products, totalAmount } = req.body;

  try {

    await Order.create({
      userId: req.userId,
      products,
      totalAmount
    });

    return res.status(201).json({ message: 'order created successfully' });

  } catch (err) {
    return res.status(400).json({ message: `${err}` });
  }
}