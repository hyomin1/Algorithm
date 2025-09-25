function solution(n, times) {
    var answer = 0;
    let left = 1;
    let right = Math.max(...times) * n;
    
    while (left <= right) {
        const mid = Math.floor((left+right) / 2);
        
        let total = 0;
        for (const t of times) {
            total += Math.floor(mid / t);
            if (total >= n) break;
        }
        
        if (total >= n) {
            answer = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return answer;
}