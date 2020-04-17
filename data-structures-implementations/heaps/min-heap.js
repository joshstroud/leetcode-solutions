class MinHeap {
  constructor() {
    this.items = [];
  }

  getLeftChildIndex(index) {
    return index * 2 - 1;
  }

  getRightChildIndex(index) {
    return index * 2;
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  hasLeftChild(index) {
    return this.getLeftChild(index) !== undefined;
  }

  hasRightChild(index) {
    return this.getRightChild(index) !== undefined;
  }

  hasParent(index) {
    return this.getParent(index) !== undefined;
  }

  getLeftChild(index) {
    return this.items[this.getLeftChildIndex(index)];
  }

  getRightChild(index) {
    return this.items[this.getRightChildIndex(index)];
  }

  getParent(index) {
    return this.items[this.getParentIndex(index)];
  }

  swap(index1, index2) {
    [this.items[index1], this.items[index2]] = [
      this.items[index2],
      this.items[index1],
    ];
  }

  peek() {
    return this.items[0];
  }

  poll() {
    let min = this.items[0];
    this.heapifyDown();
    return min;
  }

  add(item) {
    this.items.push(item);
    this.heapifyUp();
    return this.items;
  }

  heapifyUp() {
    let el = this.items[this.items.length - 1];
    let elIndex = this.items.length - 1;

    while (this.hasParent(elIndex) && el < this.getParent(elIndex)) {
      let parentIndex = this.getParentIndex(elIndex);
      this.swap(elIndex, parentIndex);
      elIndex = parentIndex;
    }
  }
  heapifyDown() {
    this.items[0] = this.items.pop();
    let el = this.items[0];
    let elIndex = 0;

    while (
      ((this.hasLeftChild(elIndex) || this.hasRightChild(elIndex)) &&
        el > this.getLeftChild(elIndex)) ||
      el > this.getRightChild(elIndex)
    ) {
      let child = this.getLeftChild(elIndex);

      if (child < el) {
        this.swap(this.getLeftChildIndex(elIndex), elIndex);
        elIndex = this.getLeftChildIndex(elIndex);
      } else {
        child = this.getRightChild(elIndex);
        if (child < el) {
          this.swap(this.getRightChildIndex(elIndex), elIndex);
          elIndex = this.getRightChildIndex(elIndex);
        }
      }
    }
  }
}

const heap = new MinHeap();
heap.add(10);
heap.add(15);
heap.add(20);
heap.add(17);
console.log(heap.items);
console.log(heap.poll());
console.log(heap.items);
console.log(heap.poll());
console.log(heap.items);
