import express from 'express';
import { PORT } from './config/constants';
import { userRouter, itemRouter } from './routes';
import bodyParser from 'body-parser';

const app = express();
app.use(express.json());
app.use(bodyParser.json())

app.use('/users', userRouter);
app.use('/item', itemRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});