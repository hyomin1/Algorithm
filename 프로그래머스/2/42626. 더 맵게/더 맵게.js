class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    push(value) {
        this.heap.push(value);
        let curIdx = this.size() - 1;
        let parentIdx = Math.floor((curIdx - 1) / 2);
        
        while (parentIdx >= 0 && this.heap[parentIdx] > value) {
            const tmp = this.heap[parentIdx];
            this.heap[parentIdx] = value;
            this.heap[curIdx] = tmp;
            curIdx = parentIdx;
            parentIdx = Math.floor((curIdx - 1) / 2);
        }
    }
    pop() {
        if (this.size() === 0) return null;
        if (this.size() === 1) return this.heap.pop();
        
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        
        let curIdx = 0;
        let left = 2 * curIdx + 1;
        let right = 2 * curIdx + 2;
        
        while (left < this.size()) {
            let smallChild = left;
            if (right < this.size() && this.heap[right] < this.heap[left]) {
                smallChild = right;
            }
            
            if(this.heap[curIdx] <= this.heap[smallChild]) break;
            const tmp = this.heap[curIdx];
            this.heap[curIdx] = this.heap[smallChild];
            this.heap[smallChild] = tmp;
            
            curIdx = smallChild;
            left = 2 * curIdx + 1;
            right = 2 * curIdx + 2;
            
        }
        return min;
    }
    
    size() {
        return this.heap.length;
    }
}

function solution(scoville, K) {
    var answer = 0;
    const heap = new MinHeap();
    
    for (let i = 0; i < scoville.length; i++) {
        heap.push(scoville[i]);
    }
    
    while(heap.size() > 1 && heap.heap[0] < K) {
        const first = heap.pop();
        const second = heap.pop();
        
        const newS = first + (second * 2);
        heap.push(newS);
        answer++;
    }
    
    if (heap.heap[0] < K) {
        return -1;
    }
    
    return answer;
}