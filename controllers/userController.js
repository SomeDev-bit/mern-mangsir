import User from "../models/User.js"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const isExist = await User.findOne({ email: email });

    //email check
    if (!isExist) return res.status(401).json({ message: 'invalid credential' });

    //password check
    const pass = bcrypt.compareSync(password, isExist.password);
    if (!pass) return res.status(401).json({ message: 'invalid credential' });

    const token = jwt.sign({
      userId: isExist._id,
      role: isExist.role
    }, process.env.SECRET);


    return res.status(201).json({
      message: 'login successfully',
      data: {
        token,
        userId: isExist._id,
        role: isExist.role
      }
    });
  } catch (err) {
    return res.status(400).json({
      message: `${err}`
    })

  }
}


export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const isExist = await User.findOne({ email: email });
    if (isExist) return res.status(409).json({ message: 'user already exist' });

    const hashPass = bcrypt.hashSync(password, 10);
    await User.create({
      username,
      email,
      password: hashPass
    });

    return res.status(201).json({ message: 'registered successfully' });
  } catch (err) {
    return res.status(400).json({
      message: `${err}`
    })

  }

}