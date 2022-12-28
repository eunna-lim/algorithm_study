function solution(n, left, right) {
  const answer = [];
  for (let i = left; i <= right; i++) {
    const row = Math.floor(i / n);
    const column = i % n;
    answer.push(row >= column ? row + 1 : column + 1);
  }
  return answer;
}
