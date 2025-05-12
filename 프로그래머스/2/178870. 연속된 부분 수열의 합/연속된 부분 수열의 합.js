function solution(sequence, k) {
    var answer = [];
    let start = 0, end = 0, sum = 0;
    const arr = [];
    while (end <= sequence.length) {
        if (sum < k) {
            sum += sequence[end++];
        } else if (sum > k) {
            sum -= sequence[start++];
        } else {
            arr.push([start,end-1]);
            sum -= sequence[start++];
            
        }
    }
    arr.sort((a,b) => {
        const lenA = a[1] - a[0];
        const lenB = b[1] - b[0];
        if (lenA !== lenB) return lenA - lenB;
        return a[0] - b[0];
    })
    answer = arr[0];
    return answer;
}