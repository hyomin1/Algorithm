function solution(x, y, n) {
    const visited = new Set();
    const queue = [[x, 0]];
    let head = 0;

    while (head < queue.length) {
        const [cur, count] = queue[head++];

        if (cur === y) return count;

        for (const next of [cur + n, cur * 2, cur * 3]) {
            if (next <= y && !visited.has(next)) {
                visited.add(next);
                queue.push([next, count + 1]);
            }
        }
    }

    return -1;
}
