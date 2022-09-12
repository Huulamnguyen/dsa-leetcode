
var MyCalendar = function() {
    cal = []
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    for(let q=0;q<cal.length;q++){
        if(start<cal[q][1] && end>cal[q][0])return false
    }
    cal.push([start,end])
    return true
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */