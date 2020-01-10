import express, { Request, Response} from 'express';
import { router } from './routes/LoginRoutes';
import bodyParser from 'body-parser';
import coockieSession from 'cookie-session';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(coockieSession({ keys: ['']}))
app.use(router);

app.listen(3000, ()=>{
    console.log('listening on localhost:3000')
})