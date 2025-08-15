import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/post.js'



dotenv.config();

const port = process.env.PORT || 3200;

const app = express();

app.use('/api/posts', routes)

app.listen(port, () => {
    console.log(`Server is running on port ${port} from .env file`)
});