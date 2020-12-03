/* eslint-disable import/no-cycle */
/* eslint-disable max-len */
import express from 'express';
import 'regenerator-runtime/runtime';
import 'dotenv/config';
import router from './routes/index';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', router);

app.listen(PORT, () => {
  console.log('Server has started at port', PORT);
});

export default app;