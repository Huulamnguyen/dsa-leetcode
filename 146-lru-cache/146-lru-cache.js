/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.dict = {}
	
	// Keeps track of the when an item was last used.
	// The item at the front of the queue (the first item in the Set) is the least recently used item.
    this.q = new Set()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (key in this.dict) {
        
        // remove any instances of the key from the queue...
        this.q.delete(key)
        
        // then add the key to the back of the queue, as it is now the most recently used item
        this.q.add(key)
        
        return this.dict[key]
    } else {
        return -1
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    this.dict[key] = value
    
    // remove any instances of the key from the queue...
    this.q.delete(key)
    
    // then add the key to the back of the queue, as it is now the most recently used item
    this.q.add(key)
    
    // evict from the internal dictionary and internal queue, if needed
    if (this.q.size > this.capacity) {
        let LRU = this.q.values().next().value // gets the first (least recently used) item from our internal queue
        delete this.dict[LRU]
        this.q.delete(LRU)
    }
};
