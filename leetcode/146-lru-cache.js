/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.hash = {};
  this.capacity = capacity;
  this.head = null;
  this.tail = null;
  this.itemCount = 0;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.hash[key]) {
    // move node to head
    const selectedNode = this.hash[key];

    if (this.selectedNode === this.tail) {
      this.tail = this.tail.next;
    }
    if (this.head !== null) {
      debugger;
      this.head.next = selectedNode;
      selectedNode.prev = this.head;
    }

    this.head = selectedNode;
    return selectedNode.val;
  } else {
    return -1;
  }
  // } else {
  //   // add node to head and evict
  //   const newNode = new ListNode(key);
  //   this.hash[key] = newNode;

  //   if(this.head !== null) {
  //     this.head.next = newNode;
  //     this.newNode.prev = this.head;
  //   }

  //   this.head = this.newNode;

  //   const leastRecentlyUsedNode = this.tail;
  //   this.hash[this.tail.val] = null;
  //   this.tail = this.tail.next;
  // }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (!this.hash[key]) {
    const newNode = new ListNode(key, value);
    this.hash[key] = newNode;

    // move to front
    if (this.head !== null) {
      this.head.next = newNode;
      newNode.prev = this.head;
    }
    this.head = newNode;

    if (this.tail === null) {
      this.tail = this.head;
    }
    // evict last node if capacity is full
    if (this.itemCount >= this.capacity) {
      if (this.tail) {
      }
      this.tail.next.prev = null;
      this.tail = this.tail.next;
      delete this.hash[this.tail.key];
    } else {
      this.itemCount++;
    }
  }

  console.log(`Hash: ${Object.keys(this.hash)}`);
  printNodeList(this.head);
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

const ListNode = function(key, val) {
  this.val = val;
  this.key = key;
  this.next = null;
  this.prev = null;
};

const printNodeList = head => {
  if (head === null) {
    return;
  }
  console.log(head);
  printNodeList(head.prev);
};

let cache = new LRUCache(2);

cache.put(1, 1);
cache.put(2, 2);
console.log('Get: ' + cache.get(1)); // returns 1
cache.put(3, 3); // evicts key 2
console.log('Get: ' + cache.get(2)); // returns -1
cache.put(4, 4); // evicts key 1
console.log('Get: ' + cache.get(1)); // returns -1
console.log('Get: ' + cache.get(3)); // returns 3
console.log('Get: ' + cache.get(4)); // returns 4
