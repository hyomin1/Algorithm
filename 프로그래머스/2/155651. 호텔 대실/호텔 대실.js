class MinHeap {
    constructor() {
        this.items = [];
    }
    size() {
        return this.items.length;
    }
    peek() {
        return this.items[0];
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
        [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
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
            const leftChild = index * 2 + 1;
            const rightChild = index * 2 + 2;
            const smallerChild = rightChild < this.size() && this.items[rightChild] < this.items[leftChild] ? rightChild : leftChild;
            if (this.items[index] <= this.items[smallerChild]) break;
            this.swap(index,smallerChild);
            index = smallerChild;
        }
    }
}

function splitTime(time) {
    const [hour,minute] = time.split(':').map(Number);
    return hour * 60 + minute;
}

function solution(book_time) {
    var answer = 0;
    const heap = new MinHeap();
    
    book_time.sort((a,b) => {
        const aTime = splitTime(a[0]);
        const bTime = splitTime(b[0]);
        return aTime - bTime;
    });
  
    for (const time of book_time) {
        const [startTime,endTime] = time;
        const start = splitTime(startTime);
        const end = splitTime(endTime);
        if (heap.size() && heap.peek() <= start) {
            heap.pop();
        } 
        heap.push(end+10);
        
    }
    return heap.size();

}