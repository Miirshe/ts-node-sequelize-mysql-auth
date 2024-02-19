// import packages 
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { PORT } from './config/initial.config';
import { connectDB } from './config/db.config';
import "./models/models";
import userRoutes from './routes/user.router';

// initialize app
const app = express();

// configure middlewares
app.use(cors({ credentials: true }));
app.use(cookieParser());
app.use(bodyParser.json());

app.use("/api", userRoutes);

// configure database as middleware
connectDB();

// listening on server
app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
})