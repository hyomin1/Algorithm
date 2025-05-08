function solution(elements) {
    var answer = 0;
    const set = new Set();
    let n = 1;
    for (let i = 0; i < elements.length; i++) {
        let sum = elements[i];
        set.add(sum);
        let count = 0;
        let index = i+1;
        while(count < elements.length-1) {
            sum += elements[index % elements.length];
            count++;
            index++;
            set.add(sum);
        }
    }
    return set.size;
}