function solution(n, stations, w) {
    var answer = 0;
    let location = 1;
    let index = 0;
    
    while (location <= n) {
        if (index < stations.length && stations[index] - w <= location) {
            location = stations[index] + w + 1;
            index++;
        } else {
            answer++;
            location += w * 2 + 1;
        }
    }

    return answer;
}