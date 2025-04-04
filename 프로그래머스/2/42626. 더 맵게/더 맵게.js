class MinHeap {
    constructor() {
        this.items = [];
    }
    
    size() {
        return this.items.length;
    }
    push(item) {
        this.items.push(item);
        this.bubbleUp();
    }
    
    pop() {
        if (this.size() === 0) return null;
        const min = this.items[0];
        this.items[0] = this.items[this.size() - 1];
        this.items.pop();
        this.bubbleDown();
        return min;
    }
    swap(a,b) {
        [this.items[a] , this.items[b]] = [this.items[b], this.items[a]];
    }
    bubbleUp() {
        let index = this.size() - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index-1)/2);
            if (this.items[parentIndex] <= this.items[index]) break;
            this.swap(parentIndex, index);
            index = parentIndex;
        }
    }
    
    bubbleDown() {
        let index = 0;
        while (index * 2 + 1 < this.size()) {
            let leftChild = index * 2 + 1;
            let rightChild = index * 2 + 2;
            let smallerChild = rightChild < this.size() && this.items[rightChild] < this.items[leftChild] ? rightChild : leftChild;
            if (this.items[index] <= this.items[smallerChild]) break;
            this.swap(smallerChild,index);
            index = smallerChild;
        }
    }
    
    peek() {
        return this.items[0];
    }
}

function solution(scoville, K) {
    var answer = 0;
    const heap = new MinHeap();
    
    scoville.forEach((v) => heap.push(v));
    
    while (heap.size() >= 2 && heap.peek() < K) {
        const first = heap.pop();
        const second = heap.pop();
        heap.push(first + second * 2);
        answer++;
    }
    if (heap.peek() < K) return -1;
    return answer;
}