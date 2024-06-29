const readline = require('readline');

(async () => {
    let rl = readline.createInterface({ input: process.stdin });
    let N;
    for await (const line of rl) {
        N = BigInt(line); // 입력 값을 BigInt로 변환
    }
    rl.close();

    let answer = 0n; // BigInt 초기값 0n
    for (let i = 1n; i <= N; i++) {
        answer += i * i; // 각 정사각형의 개수를 더함
    }

    console.log(answer.toString()); // 결과를 문자열로 변환하여 출력
    process.exit();
})();
