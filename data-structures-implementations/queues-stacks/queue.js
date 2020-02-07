// Queue methods - enqueue, dequeue, front, back, size
// implement with linked list
class Queue {
  constructor() {
    this._head = null;
    this.size = 0;
    this.front = null;
    this.back = null;
  }

  enqueue(val) {
    const newNode = new Node(val);

    if (!this.front) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }

    this.size++;
    return this.size;
  }

  dequeue() {
    if (!this.front) {
      return null;
    }
    const dequeuedNode = this.front;
    this.front = this.front.next;
    this.size--;
    return dequeuedNode.val;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.front());
console.log(q.back());
console.log(q.dequeue());
console.log(q.size);

// 1, 3, 3, 2
