function solution(s) {
    var answer = [];
    s = s.replaceAll(/\{/g,'');
    s = s.replaceAll(/\}/g,'');
    const arr = s.split(',').map(Number);
    const map = {};
    for(let i = 0; i < arr.length; i++) {
        const n = arr[i];
        map[n] = (map[n] || 0) + 1;
    }
    const entries = Object.entries(map);
    entries.sort((a,b) => b[1] - a[1]);
    const sortValue = entries.map((v) => Number(v[0]));
    return sortValue;
}