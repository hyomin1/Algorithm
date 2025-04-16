function solution(routes) {
    var answer = 0;
    routes.sort((a,b) => a[1] - b[1]); // 진출 지점 기준 오름 차순 정렬
    let camera = -Infinity;
    for (const [start,end] of routes) {
        if (start > camera) {
            answer++;
            camera = end;
        }
    }
    return answer;
}