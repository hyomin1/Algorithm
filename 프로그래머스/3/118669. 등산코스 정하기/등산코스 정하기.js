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
            this.swap(parentIndex,index);
            index = parentIndex;
        }
    }
    bubbleDown() {
        let index = 0;
        while ((index * 2 + 1) < this.size()) {
            const leftChild = index * 2 + 1;
            const rightChild = index * 2 + 2;
            const smallerChild = rightChild < this.size() && this.items[rightChild][1] < this.items[leftChild][1] ? rightChild : leftChild;
            if (this.items[index][1] <= this.items[smallerChild][1]) break;
            this.swap(index,smallerChild);
            index = smallerChild;
        }
    }
}

function solution(n, paths, gates, summits) {
    var answer = [];
    const graph = {};
    for (let i = 1 ; i <= n; i++) {
        graph[i] = [];
    }
    for (const [u,v,w] of paths) {
        graph[u].push([v,w]);
        graph[v].push([u,w]);
    }
    const distance = Array.from({length:n+1}).fill(Infinity);
    const heap = new MinHeap();
    for (const gate of gates) {
        distance[gate] = 0;
        heap.push([gate,0]);
    }
    while (heap.size()) {
        const [node, cost] = heap.pop();
        if (cost > distance[node]) continue;
        if (summits.includes(node)) continue;
        for (const [next, nextCost] of graph[node]) {
            if (gates.includes(next)) continue;
            const newCost = Math.max(cost,nextCost);
            if (newCost < distance[next]) {
                distance[next] = newCost;
                heap.push([next,newCost]);
            }
        }
    }
   
    summits.sort((a,b) => a - b);
    let minDistance = Infinity;
    
    for (const s of summits) {
        if (minDistance > distance[s]) {
            answer[0] = s;
            answer[1] = distance[s];
            minDistance = distance[s];
        }
    }
    return answer;
}