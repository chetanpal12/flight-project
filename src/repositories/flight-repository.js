const CrudRepository=require('./crud-repository')
const {Flight,Airplane,Airport,City}=require('../models')
const {Sequelize,Op}=require('sequelize');
class FlightRepository extends CrudRepository{
    constructor(){
        super(Flight);
    }
    async getAllFlights(filter,sort){
        const responce=await Flight.findAll({
            where:filter,
            order:sort,
            include:[
                {
                    model:Airplane,
                    required:true,
                    as:'airplaneDetail'
                },
                {
                    model:Airport,           
                    required:true,
                    as: 'departureAirport',
                    on:{
                        col:Sequelize.where(Sequelize.col("Flight.departureAirportId"), "=" , Sequelize.col("departureAirport.code"))
                    },
                    include:{
                        model:City,
                        required:true
                    }
                },
                {
                    model:Airport,            
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