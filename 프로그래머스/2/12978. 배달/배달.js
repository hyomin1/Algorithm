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
        if (this.size() === 0) {
            return null;
        }
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
            if(this.items[parentIndex] <= this.items[index]) {
                break;
            }
            this.swap(parentIndex,index);
            index = parentIndex;
        }
    }
    bubbleDown() {
        let index = 0;
        while (index * 2 + 1 < this.size()) {
            let leftChild = index * 2  + 1;
            let rightChild = index * 2 + 2;
            let smallerChild = rightChild < this.size() && this.items[rightChild] < this.items[leftChild] ? rightChild : leftChild;
            if(this.items[index] <= this.items[smallerChild]) {
                break;
            }
            this.swap(smallerChild,index);
            index = smallerChild;
        }
    }
}

function solution(N, road, K) {
    var answer = 0;
    const graph = {};
    const distances = Array(N+1).fill(Infinity);
    distances[1] = 0; 
    for (let i = 1; i <= N; i++) {
        graph[i] = [];
    }
    for (const [a,b,c] of road) {
        graph[a].push([b, c]);
        graph[b].push([a, c]);
    }
    const queue = new MinHeap();

    queue.push([1,0]); // 1번 출발 , 0
    while(queue.size() > 0) {
        const [node, weight] = queue.pop();
        
        for (const [neighbor, nextWeight] of graph[node] || []) {
            const cost = weight + nextWeight;
            if(cost < distances[neighbor]) {
                distances[neighbor] = cost;
                queue.push([neighbor,cost]);
            }
        }
    }
    answer = distances.filter((v) => v <= K).length;

    return answer;
}