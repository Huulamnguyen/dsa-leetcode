
var MyCalendar = function() {
    cal = []
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    for(i=0; i<cal.length; i++){
        if(start<cal[i][1] && end>cal[i][0]) return false
    }
    cal.push([start, end])
    return true
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */