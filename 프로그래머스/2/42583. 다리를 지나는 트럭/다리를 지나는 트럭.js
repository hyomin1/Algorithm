function getWeight(bridge) {
    return bridge.reduce((sum, val) => sum + val, 0);
}

function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    const bridge = Array(bridge_length).fill(0);
    
    while (bridge.length > 0) {
        bridge.shift();
        if (truck_weights.length > 0) {
            const sum = bridge.reduce((a, b) => a + b, 0);
            if (sum + truck_weights[0] <= weight) {
                bridge.push(truck_weights.shift());
            } else bridge.push(0);   
        }
        answer++;
    }
    
    return answer;
}