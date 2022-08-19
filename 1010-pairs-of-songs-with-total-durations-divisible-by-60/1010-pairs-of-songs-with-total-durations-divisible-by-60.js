/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    
    let output = 0
    
    let map = new Map()
    for (let seconds of time){
        let reminder = seconds % 60
        if (!map.has(reminder)){
            map.set(reminder, 1)
        } else {
            map.set(reminder, map.get(reminder) + 1)
        }
    }
    
    for (let [reminder, freq] of map){
        let numToFind = (60 - reminder) % 60
        if (map.has(numToFind) && numToFind === reminder){
            output += helper(map.get(numToFind))
        } else if (map.has(numToFind)){
            output += map.get(numToFind) * map.get(reminder) / 2
        }
    }
    
    function helper(num){
        let sum = 0
        for (let i = 0; i < num; i++){
            sum += i
        }
        return sum
    }
    
    return output
};