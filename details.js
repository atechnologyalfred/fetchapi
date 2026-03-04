import express from 'express';
import data from './data.js';
const app = express()

app.get('/', (req, res)=> {

   res.json(data)
})

app.listen(3000, ()=> {console.log('Server is running on port 3000')})
