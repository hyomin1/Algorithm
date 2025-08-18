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
        [this.items[a],this.items[b]] = [this.items[b], this.items[a]];
    }
    bubbleUp() {
        let index = this.size() - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index-1)/2);
            if (this.items[parentIndex][3] <= this.items[index][3]) break;
            this.swap(parentIndex,index);
            index = parentIndex;
        }
    }
    bubbleDown() {
        let index = 0;
        while (index * 2 + 1 < this.size()) {
            const leftChild = index * 2 + 1;
            const rightChild = index * 2 + 2;
            const smallerChild = rightChild < this.size() && this.items[rightChild][3] < this.items[leftChild][3] ? rightChild : leftChild;
            if (this.items[index][3] <= this.items[smallerChild][3]) break;
            this.swap(index,smallerChild);
            index = smallerChild;
        }
    }
}

function solution(board) {
    var answer = 0;
    
    const dx = [1,-1,0,0];
    const dy = [0,0,1,-1];
    const N = board.length;
    const dist = Array.from({length:N},()=>Array.from({length:N}, ()=> Array(4).fill(Infinity)));
    const heap = new MinHeap();
    
    for (let i = 0; i < 4; i++) {
        dist[0][0][i] = 0;
        heap.push([0,0,i,0]); // y, x , dir, cost
    }
    while (heap.size()) {
        const [y,x,dir,cost] = heap.pop();
        if (y === N-1 && x === N-1) {
            return cost;
        }
        
        for (let i = 0; i < 4; i++) {
            const ny = dy[i] + y;
            const nx = dx[i] + x;
            if (ny < 0 || ny >= N || nx < 0 || nx >= N || board[ny][nx] === 1) continue;
            
            const newCost = dir === i ? cost + 100 : cost + 600;
            if (newCost < dist[ny][nx][i]) {
                heap.push([ny,nx,i,newCost]);
                dist[ny][nx][i] = newCost;
            }
        }
    }
    return answer;
}