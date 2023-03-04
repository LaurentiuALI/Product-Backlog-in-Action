import {config} from 'dotenv';
config();

import express, {NextFunction, Request, Response} from 'express';
import mongoose from 'mongoose';
import cors from "cors";

import cardRoutes from './routes/card';
import alphaItemRoutes from './routes/alphaItem';
import stateRoutes from './routes/state';
import checklistItemsRoutes from './routes/checklistItem'

mongoose.set('strictQuery', false);


// Create express instance
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cors({
    origin: "*",
}));


app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(req.method + ' ' + req.path )
    next();
})

// Require API routes
app.use("/api/v1/cards", cardRoutes);
app.use("/api/v1/alphaItems", alphaItemRoutes);
app.use("/api/v1/states", stateRoutes);
app.use("/api/v1/checklistItems", checklistItemsRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI!)
    .then(() => {
        app.listen(process.env.PORT, () =>{
            console.log('Connected to db & listening on port ' + process.env.PORT + '...');
        })
    })
    .catch(err => console.error(err));

// Listen for requests