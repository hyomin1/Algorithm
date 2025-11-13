class Heap {
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
        const item = this.items[0];
        this.items[0] = this.items[this.size() - 1];
        this.items.pop();
        this.bubbleDown();
        
        return item;
    }
    swap(a,b) {
        [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
    }
    compare(a,b) {
        if (a[1] !== b[1]) return a[1] - b[1];
        if (a[0] !== b[0]) return a[0] - b[0];
        return a[2] - b[2];
    }
    swap(a,b) {
        [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
    }
    bubbleUp() {
        let i = this.size() - 1;
        while (i > 0) {
            const p = Math.floor((i-1)/2);
            if (this.compare(this.items[p],this.items[i]) <= 0) break;
            this.swap(i,p);
            i = p;
        }
    }
    bubbleDown() {
        let i = 0;
        while (i * 2 + 1 < this.size()) {
            const l = i * 2 + 1;
            const r = i * 2 + 2;
            const s = r < this.size() && this.compare(this.items[r],this.items[l]) <= 0 ? r : l;
            if (this.compare(this.items[i],this.items[s]) <= 0) break;
            this.swap(i,s);
            i = s;
        }
    }
}

function solution(jobs) {
    var answer = 0;
    jobs.sort((a,b) => a[0] - b[0]);
    
    let work = 0;
    let i = 0;
    let time = 0;
    
    const heap = new Heap();
    while (work < jobs.length) {
        while (i < jobs.length && jobs[i][0] <= time) {
            heap.push([...jobs[i],i]);
            i++;
        }
        
        if (heap.size()) {
            const [reqTime, duration] = heap.pop();
            time += duration;
            answer += time - reqTime;
            work++;
        } else {
            time = jobs[i][0];
        }
    }
    
    
    return Math.floor(answer/jobs.length);
}