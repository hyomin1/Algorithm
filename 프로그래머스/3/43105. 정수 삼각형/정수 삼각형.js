function solution(triangle) {
    var answer = 0;
    const arr = [];
    for (let i = 1; i < triangle.length; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            if (j === 0) {
                triangle[i][j] += triangle[i-1][j];
            } else {
                triangle[i][j] += Math.max((triangle[i-1][j] || 0),triangle[i-1][j-1] || 0); 
            }
            
        }
    }
    answer = Math.max(...triangle[triangle.length - 1]);
    return answer;
}