function solution(k, m, score) {
    var answer = 0;
    
    score.sort((a, b) => b - a);
    const apple = score.length; // 사과 개수
    const count = Math.floor(apple / m); // 상자 개수
    
   for (let i = 0; i < count; i++) {
       const apples = [];
       for (let j = i * m; j < i * m + m; j++) {
           apples.push(score[j]);
       }
       
       const min = Math.min(...apples);
      
       answer += min * m;
   }
    
   return answer;
}