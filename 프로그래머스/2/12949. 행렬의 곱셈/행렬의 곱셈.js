function solution(arr1, arr2) {
    // 행렬 곱셈: 3x2 , 2x4 => 3x4의 행렬 나옴 -> 결과는 r1xc2 크기
    const r1 = arr1.length;
    const c1 = arr1[0].length;
    
    const r2 = arr2.length;
    const c2 = arr2[0].length;
    
    let answer = Array(r1).fill().map(() => Array(c2).fill(0));
    
    for (let i = 0; i < r1; i++) {
        for(let j = 0; j < c2; j++) {
            for (let k = 0; k < c1; k++) {
                answer[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }

    return answer;
}