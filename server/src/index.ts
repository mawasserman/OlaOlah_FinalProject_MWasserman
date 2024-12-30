import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './db'; 
import router from './routes/auth';
dotenv.config();

const app = express();
const port = 3000;

db.connect()
  .then(() => console.log('Connected to PostgreSQL database'))
  .catch((err: Error) => console.error('Database connection error', err.stack));

app.use(cors());
app.use(express.json());

app.use('/auth', router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});








//Sarah's try... that also did not work
// import express from 'express'

// const app = express()
// const port = 3000 // or your preferred port

// app.listen(port, () => {
//     console.log(`:rocket: Server is running on http://localhost:${port}`)
// })