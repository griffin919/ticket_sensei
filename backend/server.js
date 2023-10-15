import  express  from "express";
import {config} from "dotenv"
import cors from "cors"
import { NotFound, errorHandler } from "./middleware/errorHandler.js";
import path from 'path'

import apiRouter from "./routes/apiRoutes.js";
import connectMongo from "./utils/dbUtils/dbConfig.js";

config();

const app = express();
connectMongo();


app.use(express.json()); //border-parser
app.use(express.urlencoded({extended: true})); // Parse URL-encoded data
app.use(cors());

// Serve static files in the "uploads" directory
app.use(express.static("uploads"));

app.use("/api", apiRouter);

app.use(NotFound);
app.use(errorHandler);

app.listen(process.env.PORT, console.log(`Server started on Port ${process.env.PORT}`))