import app from './api';
import 'express-async-errors';
import 'dotenv/config';

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});