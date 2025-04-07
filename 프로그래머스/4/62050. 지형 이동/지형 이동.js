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
        while(index > 0) {
            const parentIndex = Math.floor((index-1)/2);
            if(this.items[parentIndex][2] <= this.items[index][2]) break;
            this.swap(parentIndex,index);
            index = parentIndex;
        }
    }
    bubbleDown() {
        let index = 0;
        while(index * 2 + 1 < this.size()) {
            let leftChild = index * 2 + 1;
            let rightChild = index * 2 + 2;
            let smallerChild = rightChild < this.size() && this.items[rightChild][2] < this.items[leftChild][2] ? rightChild : leftChild;
            if(this.items[index][2] <= this.items[smallerChild][2]) break;
            this.swap(index,smallerChild);
            index = smallerChild;
        }
    }
}

function isValidMove(x,y,n) {
    return x >= 0 && y >= 0 && x < n && y < n;
}

function solution(land, height) {
    var answer = 0;
    const n = land.length;
    
    const queue = new MinHeap();
    queue.push([0,0,0]); // y, x, cost
    const dx = [1,-1,0,0];
    const dy = [0,0,-1,1];
    const visited = Array(n).fill().map(() => Array(n).fill(false));
    while (queue.size() > 0) {
        const [y,x,cost] = queue.pop();
        if(!visited[y][x]) {
            answer += cost;
            visited[y][x] = true;
            for (let i = 0; i < 4; i++) {
                const nx = dx[i] + x;
                const ny = dy[i] + y;
                if(!isValidMove(nx,ny,n)) continue;
                const diffHeight = Math.abs(land[y][x] - land[ny][nx]);
                const newCost = diffHeight <= height ? 0 : diffHeight;
                queue.push([ny,nx,newCost]);
            }
        }
      
    }
    return answer;
}