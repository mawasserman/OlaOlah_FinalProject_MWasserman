import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './db'; 
import router from './routes/auth';
dotenv.config();

const app = express();
const port = 3002;

app.use(cors());
app.use(express.json());

app.use('/auth', router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});