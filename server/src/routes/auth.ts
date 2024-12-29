import express, { Request, Response } from 'express';
import * as bcrypt from 'bcryptjs';  // Importing the entire bcryptjs module
import * as jwt from 'jsonwebtoken';  // Importing the entire jsonwebtoken module
import User from '../models/User';
import dotenv from 'dotenv';


dotenv.config();  // Load environment variables

const router = express.Router();

// Define the login route
router.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findByEmail(email);

    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token using the secret from .env
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

    res.json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;  // Export the router for use in index.ts
