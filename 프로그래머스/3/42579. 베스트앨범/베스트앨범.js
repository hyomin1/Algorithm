function solution(genres, plays) {
    var answer = [];
    const genreObj = {};
    const playObj = {};
    genres.forEach((v, i) => {
        playObj[v] = (playObj[v] || 0) + plays[i];
        if (genreObj[v]) genreObj[v].push([plays[i], i]);
        else genreObj[v] = [[plays[i], i]];
    });
    const sortedGenres = Object.keys(playObj).sort((a,b) => playObj[b] - playObj[a]);
    for (const genre of sortedGenres) {
        let sortedSongs = genreObj[genre].sort((a,b) => {
            if (a[0] === b[0]) return a[1] - b[1];
            return b[0] - a[0];
        })
        answer.push(...sortedSongs.slice(0,2).map((v)=> v[1]));
    }
    return answer;
}