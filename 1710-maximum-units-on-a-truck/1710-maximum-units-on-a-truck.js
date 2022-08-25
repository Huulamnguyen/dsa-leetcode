/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    
    // sort the boxTypes by its unit non-increasingly (Decreasing)
    boxTypes.sort((a,b) => b[1] - a[1])
    
    const boxes = {}
    let numOfUnit = 0
    
    for (let row=0; row<boxTypes.length; row++){
        const noBoxes = boxTypes[row][0]
        const unitPerBox = boxTypes[row][1]
        
        if(truckSize > noBoxes){
            numOfUnit += noBoxes * unitPerBox
            truckSize -= noBoxes
        } else {
            numOfUnit += truckSize * unitPerBox;
            return numOfUnit
        }
    }

    return numOfUnit;
    
};