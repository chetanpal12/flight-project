const {FlightRepository}=require('../repositories');
const AppError=require('../utils/errors/app-error')
const {StatusCodes}=require('http-status-codes')
const {compareTime}=require('../utils/helpers/datetime-helper')

const flightRepository= new FlightRepository();

async function createFlight(data){
    console.log(data)
    if(!compareTime(data.departureTime,data.arrivalTime)){
        throw new AppError('Cannot create a new Flight object because arrival time is less then departure time',StatusCodes.INTERNAL_SERVER_ERROR);
    }
    try {
        const flight=await flightRepository.create(data);
        return flight;
    } catch (error) {
        if(error.name=='SequelizeValidationError'){
            let explanation=[];
            error.errors.forEach((err)=>{
                explanation.push(err.message);
            })
            
            throw  new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new Flight object',StatusCodes.INTERNAL_SERVER_ERROR);
    }
    
}

async function getAllFlights(query){
    let customFilter={};
    // trips:MUM-DEL
    if(query.trips){
        [departureAirportId,arrivalAirportId]=query.trips.split("-");
        customFilter.departureAirportId=departureAirportId;
        customFilter.arrivalAirportId=arrivalAirportId;
        if(departureAirportId==arrivalAirportId){
            throw new AppError('Cannot get Flight because departureAirportId and arrivalAirportId is same',StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
    try {
        const flights=await flightRepository.getAllFlights(customFilter);
        return flights;
    } catch (error) {
        throw new AppError('Cannot fetch data of all the flights', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

// async function getAirport(id){
//     try {
//         const airport=await airportRepository.get(id);
//         return airport;
//     } catch (error) {
//         if(error.statusCode==StatusCodes.NOT_FOUND){
//             throw new AppError('The Airport you requested is not present',error.statusCode)
//         }
//         throw new AppError('Cannot fetch data of the airport', StatusCodes.INTERNAL_SERVER_ERROR);
//     }
// }

// async function destroyAirport(id){
//     try {
//         const responce=await airportRepository.destroy(id);
//         return responce;
//     } catch (error) {
//         if(error.statusCode==StatusCodes.NOT_FOUND){
//             throw new AppError('The Airport you requested to delete is not present',error.statusCode)
//         }
//         throw new AppError('Cannot destroy the Airport', StatusCodes.INTERNAL_SERVER_ERROR);
//     }
// }

// async function updateAirport(data, id){
//     try {
//         const responce=await airportRepository.update(data,id);
//         return responce;
//     } catch (error) {
//         if(error.statusCode==StatusCodes.NOT_FOUND){
//             throw new AppError('The Airport you requested to update is not present',error.statusCode)
//         }
//         throw new AppError('Cannot update data of  the Airport', StatusCodes.INTERNAL_SERVER_ERROR);
//     }
// }

module.exports={
    createFlight,
    getAllFlights,
    // getAirport,
    // destroyAirport,
    // updateAirport
}