class MinHeap {
  constructor(heap) {
    this.heap = heap;
  }

  peek() {
    return this.heap[0];
  }

  extract() {
    const root = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heapifyDown();
  }
  getParentIndex(index) {
    return Math.round((index - 2) / 2);
  }

  getLeftChild()
  heapifyDown() {
    let el = this.heap[0];
    let index = 0;

    while (getVal(index) )
  }
}
