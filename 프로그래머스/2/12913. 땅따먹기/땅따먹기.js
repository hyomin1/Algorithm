function solution(land) {
    var answer = 0;


    for (let i = 1; i < land.length; i++) {
        for (let j = 0; j < 4; j++) {
            land[i][j] += Math.max(...land[i-1].filter((_,index) => index !== j));
        }
    }
 
    answer = Math.max(...land[land.length - 1]);
    return answer;
}