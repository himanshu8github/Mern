import express from 'express';
import dotenv from 'dotenv';
import router from './routes/post.js'



dotenv.config();

const port = process.env.PORT || 3200;

const app = express();

//body-parser middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}))

app.use('/api/posts', router)
app.use('/', router);

app.listen(port, () => {
    console.log(`Server is running on port ${port} from .env file`)
});