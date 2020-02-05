// Stack methods - push, pop, size, top
// implement with a linked list

class Stack {
  constructor() {
    this._top = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    newNode.next = this._top;
    this._top = newNode;
    this.size++;
    return this.size;
  }

  pop() {
    const poppedNode = this._top;
    if (!poppedNode) {
      throw new Error('Error: stack is empty');
    }

    this._top = this._top.next;
    this.size--;
    return poppedNode.val;
  }

  peek() {
    return this._top.val;
  }
}

// Linked list node - val and next props
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const s = new Stack();
console.log(s.push(1));
s.push(2);
s.push(3);
console.log(s.peek());
console.log(s.pop());
console.log(s.size);
