import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() =>{
    console.log('Connected to MONGODB');
    })
    .catch((err) =>{
        console.log(err);
    })


const app = express();

app.listen(5000, () =>{
    console.log('Server is running on port 5000');
});


app.get('/',(req,res) =>{
    res.json({message:'Hello World.'})
})

app.use('/api/user', userRouter);