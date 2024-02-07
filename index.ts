import express from 'express';
import cors from 'cors';
import fileDb from "./fileDb";
import categoriesRouter from "./routers/categories";

const app = express();
const port = 8000;

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

app.use('/categories', categoriesRouter);

const run = async () => {
    await fileDb.init();

    app.listen(port, () => {
        console.log(`Server started on ${port} port!`);
    });
};

void run();