// BFS로 구현하다가 회전 기준을 잡는 것에서 실패...
// https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.3-%EB%B8%94%EB%A1%9D-%EC%9D%B4%EB%8F%99%ED%95%98%EA%B8%B0-JS 풀이 참고
// 회전 시 네 방향으로 회전 가능
// 1. 왼쪽 칸을 기준으로 위로 회전, 2. 왼쪽 칸을 기준으로 아래로 회전
// 3. 오른쪽 칸을 기준으로 위로 회전 4. 오른쪽 칸을 기준으로 아래로 회전
// 회전하여 유효한 위치인 경우에 queue에 집어넣음.
function solution(board) {
  const N = board.length;
  const goal = N + "" + N;
  const queue = [[[1, 1], [1, 2], 0]];
  const visit = new Set(["1112"]);

  const new_board = new Array(N + 2)
    .fill()
    .map((_) => new Array(N + 2).fill(1));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      new_board[i + 1][j + 1] = board[i][j];
    }
  }

  while (queue.length) {
    const [left, right, count] = queue.shift();

    if (left.join("") === goal || right.join("") === goal) return count;

    const nextPosition = getNextPosition(left, right, new_board);
    for (const next of nextPosition) {
      const [next_left, next_right] = next;
      const key = next_left.join("") + next_right.join("");
      if (!visit.has(key)) {
        queue.push([next_left, next_right, count + 1]);
        visit.add(key);
      }
    }
  }
}

const getNextPosition = (left, right, board) => {
  const result = [];
  const X = 1,
    Y = 0;
  const moves = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  for (const move of moves) {
    const [dy, dx] = move;
    const next_left = [left[Y] + dy, left[X] + dx];
    const next_right = [right[Y] + dy, right[X] + dx];

    if (
      board[next_left[Y]][next_left[X]] === 0 &&
      board[next_right[Y]][next_right[X]] === 0
    ) {
      result.push([next_left, next_right]);
    }
  }

  const toward = [-1, 1];

  if (left[Y] === right[Y]) {
    for (const dy of toward) {
      if (
        board[left[Y] + dy][left[X]] === 0 &&
        board[right[Y] + dy][right[X]] === 0
      ) {
        result.push([left, [left[Y] + dy, left[X]]]);
        result.push([[right[Y] + dy, right[X]], right]);
      }
    }
  } else {
    for (const dx of toward) {
      if (
        board[left[Y]][left[X] + dx] === 0 &&
        board[right[Y]][right[X] + dx] === 0
      ) {
        result.push([[left[Y], left[X] + dx], left]);
        result.push([right, [right[Y], right[X] + dx]]);
      }
    }
  }

  return result;
};
