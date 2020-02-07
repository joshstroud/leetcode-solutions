// two non-negative numbers
// limit on number of characters?
// digits are in reverse order

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let carry = false;
  let resultList = null;
  let currentNode = null;

  while (l1 || l2) {
    let sum = 0;

    const l1Val = l1 ? l1.val : 0;
    const l2Val = l2 ? l2.val : 0;

    sum = l1Val + l2Val;

    sum = carry ? sum + 1 : sum;

    if (sum >= 10) {
      carry = true;
      sum = sum - 10;
    } else {
      carry = false;
    }

    if (!resultList) {
      resultList = new ListNode(sum);
      currentNode = resultList;
    } else {
      currentNode.next = new ListNode(sum);
      currentNode = currentNode.next;
    }

    if (l1) {
      l1 = l1.next;
    }

    if (l2) {
      l2 = l2.next;
    }
  }

  return resultList;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const nodeA1 = new ListNode(2);
const nodeA2 = new ListNode(4);
const nodeA3 = new ListNode(3);
const nodeB1 = new ListNode(5);
const nodeB2 = new ListNode(6);
const nodeB3 = new ListNode(4);

nodeA1.next = nodeA2;
nodeA2.next = nodeA3;
nodeB1.next = nodeB2;
nodeB2.next = nodeB3;

const printList = node => {
  let current = node;
  const nodes = [];

  while (current) {
    nodes.push(current.val);
    current = current.next;
  }

  console.log(nodes.join(' -> '));
};

printList(nodeA1);

printList(addTwoNumbers(nodeA1, nodeB1));

// Brute force:
// iterate through list, sum indiviudal and add to output node list, carry the one as we go and create new node if needed
// Best conceivable runtime: O((n or m)), whichever n or m number of nodes is greater
// TC: O(n / m), SC: O(n or m)
// numbers non-negative so sum is always greater, never need to reduce number of nodes

// iterative approach

// recursive approach
// base case 1: no next nodes, and no carry
// base case 2: no next nodes, and a carry
// iterative case: sum nodes, add node to resultHead, and call with potential carry

// Edge cases:
// 9 -> 9 -> 9
// 1
// 0 -> 0 -> 0 -> 1

// 9 -> 3 -> 1
// 1 -> 2

// 9 -> 3
// 0

// Slower approach: iterate through nodes to form an array, reverse and join the array into num, sum, reverse again, and then build linked list
// space complexity is O(n)
