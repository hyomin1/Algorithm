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
            const parent = Math.floor((index-1) / 2);
            if (this.items[parent][1] <= this.items[index][1]) break;
            this.swap(index,parent);
            index = parent;
        }
    }
    bubbleDown() {
        let index = 0;
        while (index * 2 + 1 < this.size()) {
            const l = index * 2 + 1;
            const r = index * 2 + 2;
            const small = r < this.size() && this.items[r][1] < this.items[l][1] ? r : l;
            if(this.items[index][1] <= this.items[small][1]) break;
            this.swap(index,small);
            index = small;
        }
    }
    
}

function solution(n, s, a, b, fares) {
    var answer = Infinity;
    const graph = {};
    for (let i = 1; i <= n; i++) {
        graph[i] = [];
    }
    for (const [u, v, c] of fares) {
        graph[u].push([v,c]);
        graph[v].push([u,c]);
    }
    
    function dijkstra(start) {
        const distance = Array(n+1).fill(Infinity);
        distance[start] = 0;
        const heap = new MinHeap();
        heap.push([start,0]);
        
        while (heap.size()) {
            const [node, cost] = heap.pop();
            if (distance[node] < cost) continue;
            for (const [next, nextCost] of graph[node]) {
                const newCost = cost + nextCost;
                if (distance[next] > newCost) {
                    distance[next] = newCost;
                    heap.push([next,newCost]);
                }
            }
        }
        return distance;
    }
    const dS = dijkstra(s);
    const dA = dijkstra(a);
    const dB = dijkstra(b);
    for (let i = 1; i <= n; i++) {
        answer = Math.min(answer, (dS[i] + dA[i] + dB[i]));
        
    }
    return answer;
}