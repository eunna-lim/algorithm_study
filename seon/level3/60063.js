function drawBorder(board) {
  board.forEach((row) => {
    row.unshift(1);
    row.push(1);
  });
  const n = board.length;
  board.unshift(Array(n + 2).fill(1));
  board.push(Array(n + 2).fill(1));
}

const translate = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
const rotate = [1, -1];

function getNextPositions([x1, y1], [x2, y2], board) {
  const positions = [];

  for (const [dx, dy] of translate) {
    const [nx1, ny1] = [x1 + dx, y1 + dy];
    const [nx2, ny2] = [x2 + dx, y2 + dy];
    if (board[nx1][ny1] === 0 && board[nx2][ny2] === 0)
      positions.push([
        [nx1, ny1],
        [nx2, ny2],
      ]);
  }

  if (x1 === x2) {
    for (const dx of rotate) {
      const [nx1, ny1] = [x1 + dx, y1];
      const [nx2, ny2] = [x2 + dx, y2];

      if (board[nx1][ny1] === 0 && board[nx2][ny2] === 0) {
        positions.push([
          [x1, y1],
          [nx1, ny1],
        ]);
        positions.push([
          [x2, y2],
          [nx2, ny2],
        ]);
      }
    }
  }

  if (y1 === y2) {
    for (const dy of rotate) {
      const [nx1, ny1] = [x1, y1 + dy];
      const [nx2, ny2] = [x2, y2 + dy];

      if (board[nx1][ny1] === 0 && board[nx2][ny2] === 0) {
        positions.push([
          [x1, y1],
          [nx1, ny1],
        ]);
        positions.push([
          [x2, y2],
          [nx2, ny2],
        ]);
      }
    }
  }

  return positions;
}

// 8번 케이스 런타임에러. while문 내에서 q에 element가 없어서 q.shift()에서 에러나는걸로 추정됨. 다시 풀기
function solution(board) {
  const N = board.length;
  drawBorder(board);

  const q = [[[1, 1], [1, 2], 0]];
  const visit = { 1112: true, 1211: true };

  while (true) {
    const [[x1, y1], [x2, y2], count] = q.shift();
    if ((x1 === N && y1 === N) || (x2 === N && y2 === N)) return count;

    for (const [[nx1, ny1], [nx2, ny2]] of getNextPositions([x1, y1], [x2, y2], board)) {
      if (!visit[`${nx1}${ny1}${nx2}${ny2}`]) {
        visit[`${nx1}${ny1}${nx2}${ny2}`] = true;
        visit[`${nx2}${ny2}${nx1}${ny1}`] = true;
        q.push([[nx1, ny1], [nx2, ny2], count + 1]);
      }
    }
  }
}
