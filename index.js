// Code your solution here

function findMatching(arrayDriver, string){
    return arrayDriver.filter(driverName=>string.toLowerCase() === driverName.toLowerCase())
   
}

function fuzzyMatch(arrayDriver, string){
    return arrayDriver.filter(driver=>{return string === driver.slice(0, string.length)})   
}

function matchName(arrayDriver, string){
    const nameMatching = arrayDriver.filter(driver=>{return string===driver.name})
    return nameMatching
}