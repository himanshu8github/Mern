import express from 'express';
import dotenv from 'dotenv';
import router from './routes/post.js';
import errorHandler from './middleware/error.js';

dotenv.config();

const port = process.env.PORT || 3200;
const app = express();

// Body parsers
app.use(express.json());

// Routes
app.use('/', router);   // <-- mount router at /api/post

// 404 handler (no route matched)
app.use((req, res, next) => {
  res.status(404).json({ msg: 'Route not found' });
});

// Error handler (runtime errors)
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port} from .env file`);
});
