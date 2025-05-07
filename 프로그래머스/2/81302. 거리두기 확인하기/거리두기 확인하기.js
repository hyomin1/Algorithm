function solution(places) {
    var answer = [];
    
    for (const place of places) {
        const person = [];
        for (let i = 0; i < place.length; i++) {
            for (let j = 0; j < place[i].length; j++) {
                if (place[i][j] === 'P') person.push([i,j]);
            }
        }
        
        let valid = true;
        
        for (let i = 0; i < person.length - 1; i++) {
            const [y1,x1] = person[i];
            
            for (let j = i + 1; j < person.length; j++) {
                const [y2,x2] = person[j];
                const dist = Math.abs(y1-y2) + Math.abs(x1-x2);
                if (dist === 1) { // 맨해튼 거리 1, 지키지 않음
                    valid = false;
                } else if (dist === 2) { // 맨해튼 거리 2
                    if (y1 === y2) { // 같은 행
                        const midX = (x1 + x2) / 2;
                        if (place[y1][midX] !== 'X') {
                            valid = false;
                        }
                    } else if (x1 === x2) { // 같은 열
                        const midY = (y1 + y2) / 2;
                        if (place[midY][x1] !== 'X') {
                            valid = false;
                        }
                    } else { // 대각선
                        if (place[y1][x2] !== 'X' || place[y2][x1] !== 'X') {
                            valid = false;
                        }
                    }
                }
            }
        }
        answer.push(valid ? 1 : 0);    
    }
    
    return answer;
}