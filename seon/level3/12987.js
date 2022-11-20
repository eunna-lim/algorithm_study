function getScore(A, B) {
  let score = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] < B[i]) score += 1;
  }

  return score;
}

function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  if (A[0] >= B[B.length - 1]) return 0;

  let ans = 0;
  for (let k = 0; k < A.length; k++) {
    const score = getScore(A, B);
    if (score < ans) break;

    B.push(B.shift());
    ans = Math.max(ans, score);
  }

  return ans;
}
