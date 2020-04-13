class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  flattenBFS() {
    const queue = [this];
    const flat = [];

    while (queue.length > 0) {
      const currentNode = queue.shift();

      if (currentNode !== null) {
        flat.push(currentNode);
        queue.push(currentNode.left);
        queue.push(currentNode.right);
      }
      console.log(queue);
    }
    return flat;
  }
}

//        1
//      /    \
//     2      3
//    /  \   /
//   4    5 6

// flatten BFS into an array
const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);
const n4 = new Node(4);
const n5 = new Node(5);
const n6 = new Node(6);
n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.left = n6;

console.log(n1.flattenBFS(n1));
