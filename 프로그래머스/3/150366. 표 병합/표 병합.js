function solution(commands) {
    var answer = [];
    
    const merged = Array.from({length:51}, ()=> Array(51).fill(''));
    const value = Array.from({length:51}, () => Array(51).fill('EMPTY'));
    
    for (let i = 1; i < merged.length; i++) {
        for (let j = 1; j < merged[i].length; j++) {
            merged[i][j] = `${i},${j}`;
        }
    }
    
    for (const c of commands) {
        const cmd = c.split(' ');
        
        if (cmd[0] === 'UPDATE') {
            if (cmd.length === 4) {
                const r = Number(cmd[1]);
                const c = Number(cmd[2]);
                const val = cmd[3];
                const [targetR, targetC] = merged[r][c].split(',').map(Number);
                value[targetR][targetC] = val;
            } else {
                const val1 = cmd[1];
                const val2 = cmd[2];
                for (let i = 1; i < value.length; i++) {
                    for (let j = 1; j < value[i].length; j++) {
                        if (value[i][j] === val1) {
                            value[i][j] = val2;
                        }
                    }
                }
            }
        } else if (cmd[0] === 'MERGE') {
            const r1 = Number(cmd[1]);
            const c1 = Number(cmd[2]);
            const r2 = Number(cmd[3]);
            const c2 = Number(cmd[4]);
            
            if (r1 === r2 && c1 === c2) continue;
            
            // 두 셀의 실제 대표 위치 찾기
            const [rep1R, rep1C] = merged[r1][c1].split(',').map(Number);
            const [rep2R, rep2C] = merged[r2][c2].split(',').map(Number);
            
            if (rep1R === rep2R && rep1C === rep2C) continue; // 이미 병합됨
            
            // 값 결정: (r1,c1) 우선, 없으면 (r2,c2)
            let finalValue = value[rep1R][rep1C];
            if (finalValue === 'EMPTY') {
                finalValue = value[rep2R][rep2C];
            }
            
            // rep2를 가리키는 모든 셀을 rep1으로 변경
            for (let i = 1; i < merged.length; i++) {
                for (let j = 1; j < merged[i].length; j++) {
                    if (merged[i][j] === `${rep2R},${rep2C}`) {
                        merged[i][j] = `${rep1R},${rep1C}`;
                    }
                }
            }
            
            // 최종 값 설정
            value[rep1R][rep1C] = finalValue;
            
        } else if (cmd[0] === 'UNMERGE') {
            const r = Number(cmd[1]);
            const c = Number(cmd[2]);
            const [repR, repC] = merged[r][c].split(',').map(Number);
            const tmp = value[repR][repC];
            
            for (let i = 1; i < merged.length; i++) {
                for (let j = 1; j < merged[i].length; j++) {
                    if (merged[i][j] === `${repR},${repC}`) {
                        merged[i][j] = `${i},${j}`;
                        value[i][j] = 'EMPTY';
                    }
                }
            }
            value[r][c] = tmp;
            
        } else if (cmd[0] === 'PRINT') {
            const r = Number(cmd[1]);
            const c = Number(cmd[2]);
            const [ansR, ansC] = merged[r][c].split(',').map(Number);
            answer.push(value[ansR][ansC]);
        }
    }
   
    return answer;
}