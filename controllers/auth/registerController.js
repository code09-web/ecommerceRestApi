import joi from 'joi';
import  mongoose  from 'mongoose';
import bcrypt from 'bcrypt'
import User from '../../models/user';
const registerController={
 async register(req,res,next)
{
      const validationSchema=joi.object({
          name:joi.string().required().min(3).max(30),
          email:joi.string().email(),
          password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
          repeat_password: joi.ref('password')
  
      });
      
      const {error}=validationSchema.validate(req.body);
      if(error)
      {
          next(error);
           console.log(error.message)
      }else{
        res.json({"msg":"heyy this is working"})

      }

      const {name,email,password}=req.body;
      console.log(email)
      console.log(name)
      //hashed password 
       const hashedPassword=await bcrypt.hash(password,10)

      // email already exist 

     try{
      const exist =await User.exists({email:email});
      if(exist)
      {
        return next(CustomErrorHandler.alreadyExistEmail("this email has already taken by user"))
      }
     }catch{
       return next(error)
     }
     
     //input data into database ....
     const user=new User({
       name:name,
       email:email,
       password:hashedPassword

     })
     try{
       const result=await user.save();
       console.log(result)

     }catch{
       return next(error)
     }
 
}
}


export default registerController;