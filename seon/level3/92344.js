function solution(board, skill) {
  const N = board.length;
  const M = board[0].length;
  const action = { 1: -1, 2: 1 };
  const sumBoard = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));

  skill.forEach(([type, r1, c1, r2, c2, degree]) => {
    sumBoard[r1][c1] += action[type] * degree;
    sumBoard[r2 + 1][c2 + 1] += action[type] * degree;
    sumBoard[r1][c2 + 1] += -1 * action[type] * degree;
    sumBoard[r2 + 1][c1] += -1 * action[type] * degree;
  });

  for (let i = 0; i < N; i++) {
    for (let j = 1; j < M; j++) {
      sumBoard[i][j] += sumBoard[i][j - 1];
    }
  }

  for (let j = 0; j < M; j++) {
    for (let i = 1; i < N; i++) {
      sumBoard[i][j] += sumBoard[i - 1][j];
    }
  }

  let answer = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      board[i][j] += sumBoard[i][j];
      if (board[i][j] > 0) answer++;
    }
  }

  return answer;
}
