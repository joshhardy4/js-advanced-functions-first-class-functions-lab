const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2)
}
function returnLastTwoDrivers(drivers) {
    return drivers.slice(2,4)
}
const selectingDrivers = [ returnFirstTwoDrivers , returnLastTwoDrivers ];

const createFareMultiplier = function(multiplyValue) {
    return function (value) {
        return multiplyValue * value
    }
}



const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (drivers, differentDrivers) {
    return differentDrivers (drivers)
}
