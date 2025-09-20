function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    const arrived = [];
    const queue = [];
    let index = 0;
    while (arrived.length !== truck_weights.length) {
        answer++;
        if (queue.length < bridge_length) {
            const sum = queue.reduce((acc,cur) => acc + cur,0);
            if (sum + truck_weights[index] <= weight) {
                queue.push(truck_weights[index++]);
            } else queue.push(0);
        }
        if (queue.length === bridge_length) {
            const truck = queue.shift();
            if (truck !== 0) arrived.push(truck);
        }
        
    }
    answer++;
    return answer;
}