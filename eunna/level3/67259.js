/* 
동적 계획법만 생각하고, BFS를 함께 적용할 방법을 생각하지 못함.
각 방향에 따라서 비용이 달라지기 때문에, 방향마다 적용할 수 있는 방법 -> BFS & 3차원 배열
다시 풀어볼 것! */

function solution(board) {
  var answer = 0;
  const n = board.length;
  // 동적 계획법 + BFS
  // 경로를 따라 내려가면서 min(위에서 내려올 때, 옆에서 올때)을 계산

  // 방향 : 오른쪽, 왼쪽, 위쪽, 아래쪽
  const directions = [
    [1, 0],
    [-1, 0],
    [0, -1],
    [0, 1],
  ];
  const dp = Array(n)
    .fill()
    .map(() =>
      Array(n)
        .fill()
        .map(() => Array(4).fill(Infinity))
    );

  function isValid(x, y) {
    return x >= 0 && x < n && y >= 0 && y < n && board[x][y] === 0;
  }

  // 시작 : 오른쪽으로 이동, 아래쪽으로 이동 - [x, y, 비용, 방향]이 queue에 들어감.
  let queue = [
    [0, 0, 0, 0],
    [0, 0, 0, 3],
  ];

  while (queue.length) {
    const [x, y, cost, dir] = queue.shift();

    for (let i = 0; i < directions.length; i++) {
      const [mX, mY] = directions[i];
      const [nextX, nextY] = [x + mX, y + mY];
      if (isValid(nextX, nextY)) {
        let newCost = cost + 100;
        if (dir !== i) newCost += 500;

        if (newCost < dp[nextX][nextY][i]) {
          dp[nextX][nextY][i] = newCost;
          queue.push([nextX, nextY, newCost, i]);
        }
      }
    }
  }

  answer = Math.min(...dp[n - 1][n - 1]);

  return answer;
}
