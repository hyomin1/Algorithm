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
    compare(a,b) { // 0 : 소요시간 1 : 요청시간 2: 작업번호
        if (a[0] !== b[0]) return a[0] - b[0];
        if (a[1] !== b[1]) return a[1] - b[1];
        return a[2] - b[2];
    }
    swap(a,b) {
        [this.items[a], this.items[b]] = [this.items[b] , this.items[a]];
    }
    
    bubbleUp() {
        let index = this.size() - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index-1)/2);
            if (this.compare(this.items[parentIndex],this.items[index]) <= 0) break;
            this.swap(parentIndex,index);
            index = parentIndex;
        }
    }
    bubbleDown() {
        let index = 0;
        while (index * 2 + 1 < this.size()) {
            const leftChild = index * 2 + 1;
            const rightChild = index * 2 + 2;
            const smallerChild = rightChild < this.size() && this.compare(this.items[rightChild],this.items[leftChild]) <= 0 ? rightChild : leftChild;
            if (this.compare(this.items[index],this.items[smallerChild]) <= 0) break;
            this.swap(index,smallerChild);
            index = smallerChild;
        }
    }
}


function solution(jobs) {
    var answer = 0;
    jobs.sort((a,b)=>a[0]-b[0]);
    const heap = new MinHeap();
    let count = 0;
    let curTime = 0;
    let index = 0;
    let totalTime = 0;
    while (count < jobs.length) {
        while (index < jobs.length && jobs[index][0] <= curTime) {
            const [reqTime,duration] = jobs[index];
            heap.push([duration,reqTime,index]);
            index++;
        }
        if (heap.size() > 0) {
            const [duration,reqTime] = heap.pop();
            curTime += duration;
            totalTime += curTime - reqTime;
            count++;
        } else {
            curTime = jobs[index][0];
        }
    }
    answer = Math.floor(totalTime/jobs.length);
    return answer;
}