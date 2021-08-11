import express from 'express';
import {APP_PORT} from './config';
import registerRouter from './routers/registerRouter';
import errorHandler from './middlewares/errorHandler';
import mongoose  from 'mongoose';
import user from './models/user';
const app=express();

// mongodb connection
 mongoose.connect('mongodb://localhost:27017/restApi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
 
});
const db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',()=>{
  console.log("DB connected....")
})
//midlewares 
app.use(express.json())
app.use("/api",registerRouter);   
app.use(errorHandler)






app.listen(APP_PORT,()=>{
    console.log(`server is runnig in port ${APP_PORT}`)
} )