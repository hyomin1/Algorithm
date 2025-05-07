function solution(places) {
    var answer = [];
    const dx = [0,0,1,-1];
    const dy = [1,-1,0,0];
    for (let i = 0; i < places.length; i++) {
        const person = [];
        for (let j = 0; j < places[i].length; j++) {
            for (let k = 0; k < places[i][j].length; k++) {
                if (places[i][j][k] === 'P') person.push([j,k]);
            }
        }
        let check = true;
        for (let j = 0; j < person.length - 1; j++) {
            const [y1,x1] = person[j];
            for (let k = j + 1; k < person.length; k++) {
                const [y2,x2] = person[k];
                const m = Math.abs(y2-y1) + Math.abs(x2-x1);
                if (m === 1) { // 맨해튼 거리 1, 지키지 않음
                    check = false;
                    break;
                } else if (m === 2) { // 맨해튼 거리 2
                    if (y1 === y2) { // 같은 행
                        const midX = (x1 + x2) / 2;
                        if (places[i][y1][midX] !== 'X') {
                            check = false;
                            break;
                        }
                    } else if (x1 === x2) { // 같은 열
                        const midY = (y1 + y2) / 2;
                        if (places[i][midY][x1] !== 'X') {
                            check = false;
                            break;
                        }
                    } else { // 대각선
                        if (places[i][y1][x2] !== 'X' || places[i][y2][x1] !== 'X') {
                            check = false;
                            break;
                        }
                    }
                }
            }
        }
        if (check) answer.push(1);
        else answer.push(0);
    }
    
    return answer;
}