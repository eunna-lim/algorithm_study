function solution(n, s) {
  if (s / n < 1) return [-1];

  const quotient = parseInt(s / n);
  const remainder = s % n;

  const answer = new Array(n).fill(quotient);
  for (let i = n - 1; i >= n - remainder; i--) {
    answer[i] += 1;
  }

  return answer;
}
