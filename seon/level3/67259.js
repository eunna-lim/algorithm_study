function solution(board) {
  const N = board.length;
  const EAST = 0,
    WEST = 1,
    SOUTH = 2,
    NORTH = 3;
  const DIRECTION = [EAST, WEST, SOUTH, NORTH];
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  const q = [];

  if (!board[0][1]) {
    board[0][1] = [100, Infinity, Infinity, Infinity];
    q.push([EAST, [0, 1]]);
  }

  if (!board[1][0]) {
    board[1][0] = [Infinity, Infinity, 100, Infinity];
    q.push([SOUTH, [1, 0]]);
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!board[i][j]) board[i][j] = [Infinity, Infinity, Infinity, Infinity];
    }
  }

  while (q.length) {
    const [direction, [x, y]] = q.shift();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= N || ny < 0 || ny >= N || board[nx][ny] === 1)
        continue;

      if (direction === i && board[x][y][i] + 100 < board[nx][ny][i]) {
        board[nx][ny][i] = board[x][y][direction] + 100;
        q.push([DIRECTION[i], [nx, ny]]);
      } else if (
        direction !== i &&
        board[x][y][direction] + 600 < board[nx][ny][i]
      ) {
        board[nx][ny][i] = board[x][y][direction] + 600;
        q.push([DIRECTION[i], [nx, ny]]);
      }
    }
  }

  return Math.min(...board[N - 1][N - 1]);
}
