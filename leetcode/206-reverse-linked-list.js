/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// iterative approach: add all nodes to an array, reverse the array, relink all nodes to next in array
// Time complexity: O(n). Space complexity: O(n). Could we get to O(1) space complexity?
// Another iterative approach with constant space complexity.
// We could just implement recursive case iteratively with constant space complexity.

// recursive approach, given two nodes prev and current node:
// base case: head is null
// Given node, save next on second node, then set equal to first one (effectively reversing direction on next node)
// time complexity: O(n), constant space complexity

// recursive
// we want to return nodes from the bottom up
var reverseList = function(head) {
  if (head.next === null) {
    return head;
  }

  const nextNode = 
  const lastNode = reverseList(head.next);
  lastNode.next(head.next)

  // const nextNode = head.next;
  // nextNode.next = head;

  // let prevNode = null;
  // let currentNode = head;
  // let newHead = null;

  // while (currentNode) {
  //   const nextNode = currentNode.next;

  //   if (nextNode === null) {
  //     newHead = currentNode;
  //   }

  //   if (prevNode) {
  //     currentNode.next = prevNode;
  //   } else {
  //     currentNode.next = null;
  //   }

  //   prevNode = currentNode;
  //   currentNode = nextNode;
  // }

  // return newHead;
};

iterative, TC: O(n), SC: O(1)
var reverseList = function(head) {
  let prevNode = null;
  let currentNode = head;
  let newHead = null;

  while (currentNode) {
    const nextNode = currentNode.next;

    if (nextNode === null) {
      newHead = currentNode;
    }

    if (prevNode) {
      currentNode.next = prevNode;
    } else {
      currentNode.next = null;
    }

    prevNode = currentNode;
    currentNode = nextNode;
  }

  return newHead;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

const printList = head => {
  console.log(head.val);

  if (head.next) {
    printList(head.next);
  }
};

printList(reverseList(node1));
