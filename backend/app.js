import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import productRouter from './routes/product.routes.js';


const app = express();

app.use(cors());

app.use(express.json({ limit: "18kb" }));
app.use(express.urlencoded({ extended: true, limit: "18kb" }));
app.use(cookieParser());

app.use("/api/v1/product", productRouter);

const port = 3001;

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
