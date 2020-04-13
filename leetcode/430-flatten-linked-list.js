// Notes
// add Full child list to node immediately after parent in the flat list

// Approach:
// notice this is a recursive problem

// Base case: node is null, simply return
// Inductive case: For a node, call func on node and then child if exists. Then, go to next node
// At the end, reverse through list and set all prev nodes

// Call on 1, then on 2

/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

// Example: 1, 2, 3, 7 list
// 1
function Node(val, prev, next, child) {
  this.val = val;
  this.prev = prev;
  this.next = next;
  this.child = child;
}

var flatten = function (head) {
  const flatHead = null;

  flattenHelper(flatHead, head);
  return head;
};

// 1 <-> 2 <-> 3
const flattenHelper = (flatHead, currentNode) => {
  if (currentNode === null) {
    return null;
  }

  if (!flatHead) {
    flatHead = currentNode;
  } else {
    flatHead.next = currentNode; // 2.next = 3       3.next = 7      7.next = 8    8.next = 4
    currentNode.prev = flatHead; // 3.prev = 2       7.prev = 3      8.next = 7    4.prev = 8
    flatHead = currentNode; // flatHead = 3     flatHead = 7    flatHead = 8  flatHead = 4
  }
  let newFlatHead = flattenHelper(flatHead, currentNode.child) || flatHead; // 7, null, newFlatHead = flathead

  newFlatHead = flattenHelper(newFlatHead, currentNode.next) || newFlatHead; // 7, 8, newFlatHead = 8, 4

  return newFlatHead;
};

const n1 = new Node(1, null, null, null);
const n2 = new Node(2, n1, null, null);
const n7 = new Node(7, null, null, null);
const n3 = new Node(3, n2, null, null);
n1.next = n2;
n2.next = n3;
n2.child = n7;

console.log(JSON.stringify(flatten(n1)));
// Output 1 2 3 7 8 4
