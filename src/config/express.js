import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan(process.env.NODE_LOG || 'dev'));
app.use(express.json());

export default app;