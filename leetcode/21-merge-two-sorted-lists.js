// 21 merge two sorted lists

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// approach: iterate through each node and add to root node
// time complexity is O(n + m) where n and m are lengths of list

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let rootNodeSplicedList = null;
  let currentNode = null;

  while (l1 || l2) {
    let newL1 = null;
    let newL2 = null;

    if (l1) {
      newL1 = new ListNode(l1.val);
      l1 = l1.next;
    }

    if (l2) {
      newL2 = new ListNode(l2.val);
      l2 = l2.next;
    }

    if (l1 && l2) {
      newL1.next = newL2;
    }

    if (!rootNodeSplicedList) {
      if (l1) {
        rootNodeSplicedList = newL1;
      } else {
        rootNodeSplicedList = newL2;
      }
      currentNode = newL2;
    } else if (l2 && !l1) {
      currentNode.next = newL2;
      currentNode = newL2;
    } else if (l1 && !l2) {
      currentNode.next = newL1;
      currentNode = newL1;
    } else {
      currentNode.next = newL1;
      currentNode = newL2;
    }
  }

  console.log(currentNode.val);

  return rootNodeSplicedList;
};

// Why is the list sorted?

// List A, List B

const nodeA1 = new ListNode(1);
const nodeA2 = new ListNode(2);
const nodeA3 = new ListNode(4);
const nodeA4 = new ListNode(5);
const nodeA5 = new ListNode(6);

const nodeB1 = new ListNode(1);
const nodeB2 = new ListNode(3);
const nodeB3 = new ListNode(4);

nodeA1.next = nodeA2;
nodeA2.next = nodeA3;
nodeB1.next = nodeB2;
nodeB2.next = nodeB3;
nodeA3.next = nodeA4;
nodeA4.next = nodeA5;

const printList = listNode => {
  const valList = [];
  while (listNode) {
    valList.push(listNode.val);
    listNode = listNode.next;
  }

  console.log(`List: ${valList.join(', ')}`);
};

const mergedList = mergeTwoLists(nodeA1, nodeB1);
printList(mergedList);
