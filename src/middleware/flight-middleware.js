const {StatusCodes}=require('http-status-codes');
const { error } = require('winston');
const {ErrorResponce}=require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req,res,next){
    if(!req.body.flightNumber){
        ErrorResponce.message='something went wrong while create an flight';
        ErrorResponce.error=new AppError([ 'flightNumber not found in the incoming request '],StatusCodes.BAD_REQUEST);
        
        return res.status(StatusCodes.BAD_REQUEST).json({ErrorResponce});
    }
    if(!req.body.airplaneId){
        ErrorResponce.message='something went wrong while create an flight';
        ErrorResponce.error=new AppError([ 'airplaneId not found in the incoming request '],StatusCodes.BAD_REQUEST);
        
        return res.status(StatusCodes.BAD_REQUEST).json({ErrorResponce});
    }
    if(!req.body.departureAirportId){
        ErrorResponce.message='something went wrong while create an flight';
        ErrorResponce.error=new AppError([ 'departureAirportId not found in the incoming request '],StatusCodes.BAD_REQUEST);
        
        return res.status(StatusCodes.BAD_REQUEST).json({ErrorResponce});
    }
    if(!req.body.arrivalAirportId){
        ErrorResponce.message='something went wrong while create an flight';
        ErrorResponce.error=new AppError([ 'arrivalAirportId not found in the incoming request '],StatusCodes.BAD_REQUEST);
        
        return res.status(StatusCodes.BAD_REQUEST).json({ErrorResponce});
    }
    if(!req.body.arrivalTime){
        ErrorResponce.message='something went wrong while create an flight';
        ErrorResponce.error=new AppError([ 'arrivalTime not found in the incoming request '],StatusCodes.BAD_REQUEST);
        
        return res.status(StatusCodes.BAD_REQUEST).json({ErrorResponce});
    }
    if(!req.body.departureTime){
        ErrorResponce.message='something went wrong while create an flight';
        ErrorResponce.error=new AppError([ 'departureTime not found in the incoming request '],StatusCodes.BAD_REQUEST);
        
        return res.status(StatusCodes.BAD_REQUEST).json({ErrorResponce});
    }
    if(!req.body.price){
        ErrorResponce.message='something went wrong while create an flight';
        ErrorResponce.error=new AppError([ 'price not found in the incoming request '],StatusCodes.BAD_REQUEST);
        
        return res.status(StatusCodes.BAD_REQUEST).json({ErrorResponce});
    }
    if(!req.body.totalSeats){
        ErrorResponce.message='something went wrong while create an flight';
        ErrorResponce.error=new AppError([ 'totalSeats not found in the incoming request '],StatusCodes.BAD_REQUEST);
        
        return res.status(StatusCodes.BAD_REQUEST).json({ErrorResponce});
    }
    next();
}

module.exports={
    validateCreateRequest
}