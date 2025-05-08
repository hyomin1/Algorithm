function solution(elements) {
    var answer = 0;
    const set = new Set();
    
    for (let i = 0; i < elements.length; i++) {
        let sum = 0;
        for (let j = 0; j < elements.length; j++) {
            sum += elements[(i+j)%elements.length];
            set.add(sum);
        }
    }
    return set.size;
}