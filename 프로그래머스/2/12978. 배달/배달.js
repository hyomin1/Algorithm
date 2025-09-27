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
        [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
    }
    
    bubbleUp() {
        let index = this.size() - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.items[parentIndex][1] <= this.items[index][1]) break;
            
            this.swap(parentIndex, index);
            index = parentIndex;
        }
    }
    bubbleDown() {
        let index = 0;
        while (index * 2 + 1 < this.size()) {
            const leftChild = index * 2 + 1;
            const rightChild = index * 2 + 2;
            const smallerChild = rightChild < this.size() && this.items[rightChild][1] < this.items[leftChild][1] ? rightChild : leftChild;
            if (this.items[index][1] <= this.items[smallerChild][1]) break;
            this.swap(index,smallerChild);
            index = smallerChild;
        }
    }
    
}

function solution(N, road, K) {
    var answer = 0;
    const distance = Array.from({length: N+1}).fill(Infinity);
    const graph = {};
    for (let i = 1; i <= N; i++) {
        graph[i] = [];
    }
    for (const [u,v,cost] of road) {
        graph[u].push([v,cost]);
        graph[v].push([u,cost]);
    }
    
    const heap = new MinHeap();
    heap.push([1,0]);
    distance[1] = 0;
    while (heap.size()) {
        const [node, cost] = heap.pop();
        
        for (const [next, nextCost] of graph[node]) {
            if (cost + nextCost < distance[next]) {
                distance[next] = cost + nextCost;
                heap.push([next,cost+nextCost]);
            }
        }
    }

    answer = distance.filter((v) => v <= K).length;

    return answer;
}