// Code your solution here

driverNames = ["Tony", "Mboya", "Omondi", "tony"]

// function findMatching(drivers, name){
//     let newNameArray = [];

//     for(const driver of drivers){
//         if(driver.toLowerCase() === name.toLowerCase()){
//             newNameArray.push(driver);
//         }
//     }
//     return newNameArray;
// }
// findMatching(names, "tony")

function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}
findMatching(driverNames, "tony")

function fuzzyMatch(drivers, char){
    return drivers.filter(driver => driver.toLowerCase().startsWith(char.toLowerCase()));
}

function matchName(drivers, name){
    return drivers.filter(driver => driver.name === name);  
}