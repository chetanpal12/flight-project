const {StatusCodes}=require('http-status-codes');
const {FlightService}=require('../services');
const {ErrorResponce,SuccessResponce}=require('../utils/common')


/**
 * Post: /flights
 * req-body {
 * flightNumber:'',
 * airplaneId:'',
 * departureAirportId:'',
 * arrivalAirportId:'',
 * arrivalTime:'',
 * departureTime:'',
 * price:'',
 * boardingGate:'',
 * totalSeats:''
 * }
 */
async function createFlight(req,res){
    try {
        const flight= await FlightService.createFlight({
            flightNumber:req.body.flightNumber,
            airplaneId:req.body.airplaneId,
            departureAirportId:req.body.departureAirportId,
            arrivalAirportId:req.body.arrivalAirportId,
            arrivalTime:req.body.arrivalTime,
            departureTime:req.body.departureTime,
            price:req.body.price,
            boardingGate:req.body.boardingGate,
            totalSeats:req.body.totalSeats
        });
        SuccessResponce.data=flight;
        return res.status(StatusCodes.CREATED).json({SuccessResponce})
        
    } catch (error) {
        ErrorResponce.error=error;
        console.log(error)
        return res.status(error.statusCode).json({ErrorResponce});
    }
}
// /**
//  * GET: /flights/
//  * req-body {}
//  */
async function getAllFlights(req,res){
    try {
        const flight=await FlightService.getAllFlights(req.query);
        SuccessResponce.data=flight;
        return res.status(StatusCodes.OK).json({SuccessResponce});
    } catch (error) {
        ErrorResponce.error=error;
        console.log(error)
        return res.status(error.statusCode).json({ErrorResponce});
    }
}

/**
 * Get: /flights/:id
 * req-body {}
 */
async function getFlight(req,res){
    try {
        const flight=await FlightService.getFlight(req.params.id);
        SuccessResponce.data=flight;
        return res.status(StatusCodes.OK).json({SuccessResponce});
    } catch (error) {
        ErrorResponce.error=error;
        console.log(error)
        return res.status(error.statusCode).json({ErrorResponce});
    }
}

async function updateSeats(req,res){
    try {
        const responce=await FlightService.updateSeats({
            flightId:req.params.id,
            seats:req.body.seats,
            dec:req.body.dec
        });
        SuccessResponce.data=responce;
        return res.status(StatusCodes.OK).json({SuccessResponce});
    } catch (error) {
        ErrorResponce.error=error;
        console.log(error)
        return res.status(error.statusCode).json({ErrorResponce});
    }
}

// /**
//  * DELETE: /airports/:id
//  * req-body {}
//  */
// async function destroyAirport(req,res){
//     try {
//         const airport=await AirportService.destroyAirport(req.params.id);
//         SuccessResponce.data=airport;
//         return res.status(StatusCodes.OK).json({SuccessResponce});
//     } catch (error) {
//         ErrorResponce.error=error;
//         console.log(error)
//         return res.status(error.statusCode).json({ErrorResponce});
//     }
// }

// /**
//  * PATCH: /airports/:id
//  * req-body {name:'',code:'',address:'',cityId:''}
//  */
// async function updateAirport(req,res){
//     try {
//         const airport= await AirportService.updateAirport({
//             name:req.body.name,
//             code:req.body.code,
//             address:req.body.address,
//             cityId:req.body.cityId
//         },req.params.id);
//         SuccessResponce.data=airport;
//         return res.status(StatusCodes.CREATED).json({SuccessResponce})
        
//     } catch (error) {
//         ErrorResponce.error=error;
//         console.log(error)
//         return res.status(error.statusCode).json({ErrorResponce});
//     }
// }

module.exports={
    createFlight,
    getAllFlights,
    getFlight,
    updateSeats,
    // destroyAirport,
    // updateAirport
}