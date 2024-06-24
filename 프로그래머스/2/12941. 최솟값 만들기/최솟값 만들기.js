function solution(A,B){
    var answer = 0;
    A.sort((a,b) => a - b);
    B.sort((a,b) => b - a);
    for(let i = 0; i < A.length; i++) {
        answer += A[i] * B[i];
    }
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.

    return answer;
}