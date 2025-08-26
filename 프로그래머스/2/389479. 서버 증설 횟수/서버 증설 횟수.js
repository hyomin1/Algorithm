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
    peek() {
        return this.items[0];
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
            this.swap(index,parentIndex);
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

function solution(players, m, k) {
    var answer = 0;
    const heap = new MinHeap();
    for (let time = 0; time < players.length; time++) {
        const player = players[time];
        const server = Math.floor(player / m); // 필요한 서버 개수
        while (heap.size() > 0 && heap.peek() <= time) heap.pop();
        const need = server - heap.size();
        if (need > 0) {
            answer += need;
            for (let i = 0; i < need; i++) {
                heap.push(time + k);
            }   
        }
    }
    return answer;
}