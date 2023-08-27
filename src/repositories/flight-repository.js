const CrudRepository=require('./crud-repository')
const {Flight,Airplane,Airport}=require('../models')
const {Sequelize,Op}=require('sequelize');
class FlightRepository extends CrudRepository{
    constructor(){
        super(Flight);
    }
    async getAllFlights(filter,sort){
        const responce=await Flight.findAll({
            where:filter,
            order:sort,
            // include:{
            //     model:Airplane,            //If we write this then it will outer join for innner join you have to do:
            //     required:true                        //  required:true,
            // }
            //we can include in the arrat as well
            include:[
                {
                    model:Airplane,
                    required:true,
                    as:'airplaneDetail'
                },
                {
                    model:Airport,            //if we write only this 2 lines then it will not perform the exact query we want
                    required:true,
                    as: 'departureAirport',
                    on:{
                        col:Sequelize.where(Sequelize.col("Flight.departureAirportId"), "=" , Sequelize.col("departureAirport.code"))
//if you want to aliash then watch vide0 66 implementing seats and starting new services 55:00     
                    },

                },
                {
                    model:Airport,            //if we write only this 2 lines then it will not perform the exact query we want
                    required:true,
                    as: 'arrivalAirport',
                    on:{
                        col:Sequelize.where(Sequelize.col("Flight.arrivalAirportId"), "=" , Sequelize.col("arrivalAirport.code"))
                    },
                }
            ]
        });
        
        return responce;
    }
}

module.exports=FlightRepository;