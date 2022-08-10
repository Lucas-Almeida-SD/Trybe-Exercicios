import express from 'express';
import userRouter from './routes/user.route';

const app = express();
app.use(express.json());

app.use('/users', userRouter);

app.use((err: any, _req:any, res:any, _next:any) => {
  const { code, message } = err;

  if (typeof code === 'number') {
    res.status(code).json({ message });
  }

  res.status(500).json({ message: message });
})

export default app;