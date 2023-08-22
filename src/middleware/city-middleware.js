const {StatusCodes}=require('http-status-codes');
const { error } = require('winston');
const {ErrorResponce}=require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req,res,next){
    if(!req.body.name){
        ErrorResponce.message='something went wrong while create an city';
        ErrorResponce.error=new AppError([ 'City Name not found in the incoming request '],StatusCodes.BAD_REQUEST);
        
        return res.status(StatusCodes.BAD_REQUEST).json({ErrorResponce});
    }
    next();
}

module.exports={
    validateCreateRequest
}