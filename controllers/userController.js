import User from "../models/User.js"



export const loginUser = async (req, res) => {

  const users = await User.find();
  return res.status(200).json(users);

}
export const registerUser = (req, res) => {

}