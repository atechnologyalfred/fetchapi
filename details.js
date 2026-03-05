import express from 'express';
import data from './data.js';
import cors from 'cors';
import { usage } from './usage.js';
const app = express()

app.use(cors());
app.use(express.json())
app.get('/', (req, res)=> {

   res.json(data, usage)
})

app.listen(3000, ()=> {console.log('Server is running on port 3000')})
