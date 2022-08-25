/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    
    boxTypes.sort((a,b) => b[1] - a[1])
    
    let totalUnit = 0
    
    for (let row=0; row<boxTypes.length; row++){
        const numsOfBox = boxTypes[row][0]
        const unitPerBox = boxTypes[row][1]
        
        if (truckSize > numsOfBox){
            totalUnit += numsOfBox * unitPerBox
            truckSize -= numsOfBox
        } else {
            totalUnit += truckSize * unitPerBox
            return totalUnit
        }
    }
    
    return totalUnit
    
};