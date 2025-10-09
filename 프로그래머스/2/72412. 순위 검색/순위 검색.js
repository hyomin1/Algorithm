function solution(info, query) {
    var answer = [];
    const obj = {};
    for (const i of info) {
        const [a, b, c, d, e] = i.split(' ');
        const key = a + b + c + d;
        if (!obj[key]) obj[key] = [];
        obj[key].push(Number(e));
    }
    for (const key in obj) {
        obj[key].sort((a,b) => a-b);
    }
    const key1 = ['cpp','java','python'];
    const key2 = ['backend', 'frontend'];
    const key3 = ['junior', 'senior'];
    const key4 = ['chicken', 'pizza'];
    
    for (const q of query) {
        const [a, b, c, d, e] = q.split(' ').filter((v) => v !== 'and');
        let k1 = [];
        let k2 = [];
        let k3 = [];
        let k4 = [];
        let count = 0;
        
        if (a === '-') k1 = key1; else k1 = [a];
        if (b === '-') k2 = key2; else k2 = [b];
        if (c === '-') k3 = key3; else k3 = [c];
        if (d === '-') k4 = key4; else k4 = [d];
        for (const e1 of k1) {
            for (const e2 of k2) {
                for (const e3 of k3) {
                    for (const e4 of k4) {
                        const key = e1 + e2 + e3 + e4;
                        if (obj[key]) {
                            const arr = obj[key];
                            let l = 0;
                            let r = arr.length;
                            while (l < r) {
                                const mid = Math.floor((l+r) / 2);
                                if (arr[mid] >= Number(e)) r = mid;
                                else l = mid + 1;
                            }
                            count += arr.length - l;
                        }
                    }
                }
            }
        } 
        answer.push(count);
        
    }
    return answer;
}