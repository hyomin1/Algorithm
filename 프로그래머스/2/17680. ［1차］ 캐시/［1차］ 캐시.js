function solution(cacheSize, cities) {
    var answer = 0;
    const cache = [];
    if (cacheSize === 0) return cities.length * 5;
    for (let i = 0; i < cities.length; i++) {
        cities[i] = cities[i].toLowerCase();
        const city = cities[i];
        if (!cache.includes(city)) {
            answer += 5;
            if (cache.length === cacheSize) {
                cache.shift();
                cache.push(city);
            } else cache.push(city);
        } else {
            const index = cache.findIndex((v) => v === city);
            const recent = cache.splice(index,1)[0];
            cache.push(recent);
            answer++;
        }
    }
    return answer;
}