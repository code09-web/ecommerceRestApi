import {DEBUG_MODE} from '../config'
import { ValidationError } from 'joi';
const errorHandler=(err,req,res,next)=>{

    var statusCode=404;
    var data={
        massage:" error 404",
        orignalmassage:err.massage,
    
       
    }
    if(err instanceof ValidationError)
    {
        statusCode=400
        data={
            massage:" validation error 400 ..",
            ...(DEBUG_MODE==='true' && {orignalmassage:err.massage})
        }
    }
    if(err instanceof CustomErrorHandler)
    {
        statusCode=400
        data={
            massage:" already used email id ..",
            ...(DEBUG_MODE==='true' && {orignalmassage:err.massage})
        }
    }
     return res.status(statusCode).json(data)
}

export default errorHandler;