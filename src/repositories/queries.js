function addRowLockOnFlights(flightsId){
    return `SELECT * from Flights WHERE Flights.id =${flightsId} FOR UPDATE;`
}

module.exports={
    addRowLockOnFlights
}