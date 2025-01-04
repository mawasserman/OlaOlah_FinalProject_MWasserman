import express, { Request, Response, NextFunction } from 'express';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import User from '../models/User';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post('/api/signup', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findByEmail(email);
    if (existingUser) {
      res.status(400).json({ message: 'User already exists' });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create(name, email, hashedPassword);
    const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

    res.status(201).json({ message: 'User registered successfully', token });
  } catch (error) {
    next(error); // Pass errors to the Express error handler
  }
});

export default router;
