function solution(genres, plays) {
    var answer = [];
    
    const genre = {};
    const song = {};
    for (let i = 0; i < genres.length; i++) {
        const g = genres[i];
        genre[g] = (genre[g] || 0) + plays[i];
        if (!song[g]) song[g] = [];
        song[g].push([i,plays[i]])
        
    }
   
    const keys = Object.entries(genre).sort((a,b) => b[1] - a[1]).map((v) => v[0]);
    
    
   
    for (const key of keys) {
        song[key].sort((a,b) => {
            if (a[1] === b[1]) return a[0] - b[0];
            return b[1] - a[1];
        });
        
        const arr = song[key].slice(0,2).map((v) => v[0]);
        answer.push(...arr);
    }
    return answer;
}