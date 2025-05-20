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
        [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
    }
    bubbleUp() {
        let index = this.size() - 1;
        while(index > 0) {
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
            const biggerChild = rightChild < this.size() && this.items[rightChild] > this.items[leftChild] ? rightChild : leftChild;
            if (this.items[index] >= this.items[biggerChild]) break;
            this.swap(biggerChild,index);
            index = biggerChild;
        }
    }
}

function solution(n, k, enemy) {
    var answer = 0;
    const maxHeap = new MaxHeap();
    for (let i = 0; i < enemy.length; i++) {
        maxHeap.push(enemy[i]);
        n -= enemy[i];
        if (n < 0) {
            if (k > 0 && maxHeap.size() !== 0) {
                n += maxHeap.pop();
                k--;
            }
            else {
               return i;
            }
        }
    }
    return enemy.length;
}