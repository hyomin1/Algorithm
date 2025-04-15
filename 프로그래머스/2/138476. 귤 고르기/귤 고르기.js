function solution(k, tangerine) {
    var answer = 0;
    const arr = [];
    //arr[0] = 0;
    for (const t of tangerine) {
        arr[t] = (arr[t] || 0) + 1;   
    }
    
    arr.sort((a,b) => b - a);
    
    for (const a of arr) {
        k -= a;
        answer++;
        if (k <= 0) break; 
    }
    return answer;
}