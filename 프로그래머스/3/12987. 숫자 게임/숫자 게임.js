function solution(A, B) {
    var answer = 0;
    A.sort((a,b)=>a-b);
    B.sort((a,b)=>a-b);
    let index = 0;
    for (let i = 0; i < B.length; i++) {
        if(B[i] > A[index]) {
            answer++;
            index++;
        }
    }
    return answer;
}