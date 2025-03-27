// Code your solution here

driverNames = ["Tony", "Mboya", "Omondi", "tony"]


function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}
findMatching(driverNames, "tony")

function fuzzyMatch(drivers, char){
    return drivers.filter(driver => driver.toLowerCase().startsWith(char.toLowerCase()));
}
fuzzyMatch(driverNames, "T")

function matchName(drivers, name){
    return drivers.filter(driver => driver.name === name);  
}
matchName(driverNames, "Omondi")