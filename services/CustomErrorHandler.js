class CustomErrorHandler{
    constructor(statusCode,massage)
    {
         this.statusCode=statusCode;
         this.massage=massage;
    }
    
   static alreadyExistEmail(msg)
    {
      CustomErrorHandler(404,msg)
    }
}