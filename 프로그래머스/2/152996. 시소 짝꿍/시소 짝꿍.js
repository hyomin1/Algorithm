function solution(weights) {
  let answer = 0;

  const count = new Map();
  for (const w of weights) {
    count.set(w, (count.get(w) || 0) + 1);
  }

  for (const [w, c] of count) {
    if (c > 1) {
      answer += (c * (c - 1)) / 2;
    }
  }

  const ratios = [2 / 3, 2 / 4, 3 / 4]; 

  for (const [w, c] of count) {
    for (const r of ratios) {
      const target = w * r;
      if (count.has(target)) {
        answer += c * count.get(target);
      }
    }
  }

  return answer;
}
