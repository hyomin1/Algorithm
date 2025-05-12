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
        [this.items[a]. this.items[b]] = [this.items[b], this.items[a]];
    }
    bubbleUp() {
        let index = this.size() - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index-1)/2);
            if (this.items[parentIndex] <= this.items[index]) break;
            this.swap(parentIndex,index);
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
            this.swap(index,smallerChild);
            index = smallerChild;
        }
    }
}

class MaxHeap {
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
        const max = this.items[0];
        this.items[0] = this.items[this.size() - 1];
        this.items.pop();
        this.bubbleDown();
        return max;
    }
    swap(a,b) {
        [this.items[a]. this.items[b]] = [this.items[b], this.items[a]];
    }
    bubbleUp() {
        let index = this.size() - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index-1) / 2);
            if (this.items[parentIndex] >= this.items[index]) break;
            this.swap(parentIndex,index);
            index = parentIndex;
        }
    }
    bubbleDown() {
        let index = 0;
        while (index * 2 + 1 < this.size()) {
            let leftChild = index * 2 + 1;
            let rightChild = index * 2 + 2;
            let largerChild = rightChild < this.size() && this.items[rightChild] > this.items[leftChild] ? rightChild: leftChild;
            if(this.items[index] >= this.items[largerChild]) break;
            this.swap(index,largerChild);
            index = largerChild;
        }
    }
}

function solution(operations) {
    var answer = [];
    const minHeap = new MinHeap();
    const maxHeap = new MaxHeap();
    const arr = [];
    for (const operation of operations) {
        const [op, number] = operation.split(' ');
        const num = Number(number);
        if (op === 'I') {
            arr.push(num);
            arr.sort((a,b) => a - b);
        }
        else if (op === 'D') {
           num === 1 ? arr.pop() : arr.shift();
        }
    }
   
    answer = [(arr[arr.length-1] || 0), (arr[0] || 0)]
    return answer;
}