/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.hash = {};
  this.capacity = capacity;
  this.head = null;
  this.tail = null;
  this.head.prev = this.tail;
  this.tail.next = this.head;
  this.size = 0;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {


  if (this.hash[key]) {
    // move node to head
    const selectedNode = this.hash[key];

    if( this.head !== null) {
      this.head.next = selectedNode;
      this.selectedNode.prev = this.head;
    }
    
    this.head = this.selectedNode;
  } else {
    // add node to head and evict 
    const newNode = new ListNode(key);
    this.hash[key] = newNode;
    
    if(this.head !== null) {
      this.head.next = newNode;
      this.newNode.prev = this.head;
    }

    this.head = this.newNode;
    
    const leastRecentlyUsedNode = this.tail;
    this.hash[this.tail.val] = null;
    this.tail = this.tail.next;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (!this.hash[key]) {
    const newNode = new ListNode(key);
    this.hash[key] = newNode;
    
    if(this.head !== null) {
      this.head.next = newNode;
      this.newNode.prev = this.head;
    }

    this.head = this.newNode;
    
    if (size)
    const leastRecentlyUsedNode = this.tail;
    
    if (leastRecentlyUsedNode !== null) {
      this.hash[this.tail.val] = null;
      this.tail = this.tail.next;
    }
  }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// LRU cache is a doubly linked list + a hash which links to each node
// for get: check hash first, return item if in hash and move to top of list. Otherwise add to list and hash
// for put

const ListNode = function(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
};
