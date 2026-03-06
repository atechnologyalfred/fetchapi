import express from 'express';
import data from './data.js';
import cors from 'cors';
import { usage } from './data.js';
const app = express()

app.use(cors());
app.use(express.json())

app.get('/', (req, res)=> {
   res.json(data)
});
app.get('/usage', (req, res)=> res.send(usage))


app.get('/user/:id', (req, res)=> {
   try {
      const { id } = req.params;
      const getUser = data.find(user=> user.id === +id)

      if(!getUser) {
         res.status(404).json({error: 'User not found'})
      }
      res.json(getUser)
      res.status(200).json({success: 'successful user fetch'})

   } catch(error){
      
      res.status(500).json({error: 'Internal server errror'})
   }
})

app.listen(3000, ()=> {console.log('Server is running on port 3000')})
