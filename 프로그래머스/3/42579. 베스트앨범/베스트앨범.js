function solution(genres, plays) {
    var answer = [];
    const play = {};
    const genre = {};
    for (const g of genres) {
        genre[g] = [];
    }
    for (let i = 0; i < genres.length; i++) {
        genre[genres[i]].push([i,plays[i]]); 
        play[genres[i]] = (play[genres[i]] || 0) + plays[i];
    }
    
    const keys = Object.keys(play).sort((a,b) => play[b] - play[a]);
    for (const key of keys) {
        genre[key].sort((a,b) => {
            if (a[1] === b[1]) return a[0] - b[0];
            return b[1] - a[1];
        });
        const arr = genre[key].slice(0,2).map((v) => v[0]);
        answer.push(...arr);
    }
    
    return answer;
}