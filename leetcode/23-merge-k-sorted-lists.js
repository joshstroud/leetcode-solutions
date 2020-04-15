// This is a heap problem, keep that in mind
// Approaches

// Brute force: compare top of each list for each element, TC: O(k^n), where k is nmber of lists and n is average number of elements in a list
// Very slow (exponential).

// How could we use a heap to make this faster? We could take all the elements in all the lists and add to a min-heap, and then extract the min heap until we are out of elements.
// Building the heap: O(n * log n), where n is total number of elements in al lists. Extracting from heap is same time complexity.
// How could we optimize? We could extract and insert

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const heap = new Heap();

  lists.forEach((list) => {
    let node = list;

    while (node) {
      heap.insert(node.val);
      node = node.next;
    }
  });

  let resultList = new ListNode();
  resultList.val = null;

  let node = resultList;
  while (heap.size > 0) {
    const nextNode = new Node();
    nextNode.val = heap.extract();
    node.next = nextNode;
    node = nextNode;
  }

  resultList = resultList.next;

  return resultList;
};

class Heap {
  constructor() {}

  insert(val) {}

  extract(val) {}
}
