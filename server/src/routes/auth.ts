import express, { Request, Response } from 'express';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import User from '../models/User';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post('/api/signup', async (req: Request, res: Response): Promise<Response> => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create(name, email, hashedPassword);
    const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

    return res.status(201).json({ message: 'User registered successfully', token });
  } catch (error) {
    console.error(error); 
    return res.status(500).json({ message: 'Server error' });
  }
});

export default router;