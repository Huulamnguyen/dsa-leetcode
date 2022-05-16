/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let obj = {};
    let res = [];
    
    for (let e of nums1){
        if(!obj[e]){
            obj[e] = 1;
        } else {
            obj[e]++;
        }
    }
    
    for(let e of nums2){
        if(obj[e] > 0){
            res.push(e)
            obj[e]--;
        }
    }
    
    return res;
};